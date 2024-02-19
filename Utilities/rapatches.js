// ==UserScript==
// @name         RAPatches
// @namespace    https://retroachievements.org
// @updateURL    https://raw.githubusercontent.com/RetroAchievements/RAPatches/main/Utilities/rapatches.js
// @downloadURL  https://raw.githubusercontent.com/RetroAchievements/RAPatches/main/Utilities/rapatches.js
// @version      0.8
// @description  Add RAPatches download links to retroachievements.org linked hashes page e.g. https://retroachievements.org/linkedhashes.php?g=19339
// @author       wholee
// @match        https://retroachievements.org/linkedhashes.php?g=*
// @run-at       document-start
// @icon         https://static.retroachievements.org/assets/images/favicon.webp
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const RAgitRepo = 'https://api.github.com/repos/RetroAchievements/RAPatches/git/trees/main?recursive=1';
    const baseLink = 'https://github.com/RetroAchievements/RAPatches/raw/main/';

    const updateInterval = 86400000; // 1 day
    const currentUnixTimestamp = Date.now();

    var RAgitRepo_lastUpdated = localStorage.getItem('RAgitRepo_lastUpdated');
    var RAgameID = new URLSearchParams(window.location.search).get('g');

    var repoJsonPromise;
    if (RAgitRepo_lastUpdated === null || isNaN(RAgitRepo_lastUpdated) ||
        RAgitRepo_lastUpdated < currentUnixTimestamp - updateInterval) {

        repoJsonPromise = fetch(RAgitRepo)
            .then(res => res.json())
            .then(json => {
                const out = getGameIdAndPath(json);
                localStorage.setItem('RAgitRepo', JSON.stringify(out));
                localStorage.setItem('RAgitRepo_lastUpdated', currentUnixTimestamp);
                return out;
            });
    } else {
        repoJsonPromise = Promise.resolve(JSON.parse(localStorage.getItem('RAgitRepo')));
    }

    document.addEventListener("DOMContentLoaded", () => {
        repoJsonPromise.then(json => injectRAPatches(RAgameID, json))
            .catch(err => { throw err });;
    });

    function injectRAPatches( gameId, gameData ){

        var para = document.querySelector("main article > p");

        try{

            var gameDetails = gameData[gameId];

            var injectHTML = '</br><p class="embedded">Patches available at <a href="https://github.com/RetroAchievements/RAPatches">https://github.com/RetroAchievements/RAPatches</a>:</br></br>'

            for (var i = 0; i < gameDetails.length; i++) {

                var pathArray = gameDetails[i].split('/');
                var zipName = pathArray[pathArray.length - 1];

                injectHTML = injectHTML + '<a href="' + baseLink + gameDetails[i] + '">' + zipName + '</a></br>';
            }

            injectHTML = injectHTML + '</p>';
            para.insertAdjacentHTML( 'afterend', injectHTML);

        } catch(error) {

            //para.insertAdjacentHTML( 'afterend', '</br>RAPatches: N/A</br>' )
            // Do nothing for now

        }

    }

    function getGameIdAndPath( RAgitRepoJson ) {

        var gitTree = RAgitRepoJson.tree;

        var gameIdAndPathList = {};

        for (var i = 0; i < gitTree.length; i++){

            var fileObj = gitTree[i];

            for (var key in fileObj){

                if(String(fileObj[key]).endsWith('.zip') || String(fileObj[key]).endsWith('.7z') ){

                    // split path to get the gameID
                    var pathArray = fileObj[key].split('/');
                    var zipName = pathArray[pathArray.length - 1];

                    var splitZipNameArray = zipName.split('-');
                    var gameId = splitZipNameArray[0];

                    if(gameIdAndPathList[gameId] === undefined){

                        var files = [];
                        files.push(fileObj[key]);
                        gameIdAndPathList[gameId] = files;

                    }else{

                        gameIdAndPathList[gameId].push(fileObj[key]);

                    }
                }
            }
        }

        return gameIdAndPathList;
    }

})();
