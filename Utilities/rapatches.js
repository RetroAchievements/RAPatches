// ==UserScript==
// @name         RAPatches
// @namespace    https://retroachievements.org
// @updateURL    https://raw.githubusercontent.com/RetroAchievements/RAPatches/main/Utilities/rapatches.js
// @downloadURL  https://raw.githubusercontent.com/RetroAchievements/RAPatches/main/Utilities/rapatches.js
// @version      0.6
// @description  Add RAPatches download links to retroachievements.org linked hashes page e.g. https://retroachievements.org/linkedhashes.php?g=19339
// @author       wholee
// @match        https://retroachievements.org/linkedhashes.php?g=*
// @icon         https://static.retroachievements.org/assets/images/favicon.webp
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const RAgitRepo = 'https://api.github.com/repos/televandalist/RAPatches/git/trees/main?recursive=1';
    const baseLink = 'https://github.com/RetroAchievements/RAPatches/raw/main/';

    const updateInterval = 86400000; // 1 day
    const currentUnixTimestamp = Date.parse(Date(new Date()));

    var RAgitRepo_lastUpdated = localStorage.getItem('RAgitRepo_lastUpdated');
    var RAgameID = new URLSearchParams(window.location.search).get('g');

    if (localStorage.getItem('RAgitRepo_lastUpdated') === null ||
        localStorage.getItem('RAgitRepo_lastUpdated') < currentUnixTimestamp - updateInterval ||
        isNaN(localStorage.getItem('RAgitRepo_lastUpdated'))){

        fetch(RAgitRepo)
            .then(res => res.json())
            .then(out => {
            injectRAPatches( RAgameID, getGameIdAndPath(out) );
            localStorage.setItem('RAgitRepo', JSON.stringify(getGameIdAndPath(out)));
            localStorage.setItem('RAgitRepo_lastUpdated', currentUnixTimestamp );
        })
            .catch(err => { throw err });

    } else {

        injectRAPatches( RAgameID, JSON.parse(localStorage.getItem('RAgitRepo')) );

    }

    function injectRAPatches( gameId, gameData ){

        var para = document.querySelector("#fullcontainer > p")

        try{

            var gameDetails = gameData[gameId];

            var injectHTML = '</br><p class="embedded">Patches available at <a href="https://github.com/RetroAchievements/RAPatches">https://github.com/RetroAchievements/RAPatches</a>:</br></br>'

            for (var i = 0; i < gameDetails.length; i++) {

                var pathArray = gameDetails[i].split('/');
                var zipName = pathArray[pathArray.length - 1]

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
                    var zipName = pathArray[pathArray.length - 1]

                    var splitZipNameArray = zipName.split('-');
                    var gameId = splitZipNameArray[0];

                    if(gameIdAndPathList[gameId] === undefined){

                        var files = []
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