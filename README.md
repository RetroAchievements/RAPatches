# IMPORTANT NOTE

I'm doing a lot of cleanup and sorting to make this repo easier to navigate. If you come across any broken links in the RA forum, please open an issue here or notify me via Discord @ `televandalist#9495` (2022-05-03)

# RAPatches

Patch repo for RetroAchievements. Intended for back-ups of patch for hacks, translations, subsets, etc. 

Please open issues for requests and/or error reports. However, please **do not** make hash-linking requests here; patches in this repo are for hashes that have already been linked.<br><br>

***Contribution Guidelines:***
- The majority of patches are and should be in BPS format. IPS is allowed due to header nightmares and xDelta is allowed due to being able to handle large file sizes. Please DO NOT use any other format without a very good reason for doing so.
- Patches for hacks that have their own entry do not need a special naming scheme, at least until we come up with one.
- Patches for Subsets should be named according to their game entry. 
- Patches for translations, bug fixes, etc. should follow this format (not all tags will be applicable): `[MSU-1] Title (Region) (Base ROM Version) (Language/Patch Type) (Patch Author) (Patch Version)`
- Patches are then compressed to either .zip or .7z, with those following a `GAMEID-GameTitleWithoutSpaces` naming scheme for linking purposes.
- Be sure to include a readme.txt in the .zip/.7z that states which ROM the patch is intended to be used with.
- Whenever possible, please group similar patches together. If a game has five different Russian translations, we do not need a separate link for each one. Just throw them all into the same .zip/.7z. This applies to language patches as well as patches with various versions.
- The readme.txt files should follow this format:<br>

`Use with:`<br><br>
`[Group, such as No Intro]`<br>
`[ROM file name and extension]`<br>
`[ROM Checksum]`<br>
`[CRC Checksum]`
