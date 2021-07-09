# RAPatches

Patch repo for RetroAchievements. Intended for back-ups of `~Bonus~`, `~Multi~`, and `~Hack~` patches. Planning to include others such as translations, bug-fixes, etc., but those may need to be added as needed or upon request.

RA-exclusive patches should be hosted here to provide ease-of-access for users. 

Please open issues for requests and/or error reports. However, please **do not** make hash-linking requests here; patches in this repo are for hashes that have already been linked.<br><br>

***Contribution Guidelines:***
- Most patches are in BPS format (with the exception of a few xdelta and IPS patches) to ensure that they will only work with the correct base ROMs. 
- Patches for `~Bonus~, ~Hack~, and ~Multi~` are named according to their RetroAchievements entry. 
- Patches for translations, bug fixes, etc. should follow this format (not all tags will be applicable): `[MSU-1] Title (Region) (Base ROM Version) (Language/Patch Type) (Patch Version) (Patch Author)`
- Patches are then compressed to either .zip or .7z, with those following a `GAMEID-GameTitleWithoutSpaces` naming scheme for linking purposes.
- For custom patches, a readme.txt must be included if the base ROM differs from the original patch.
- The readme.txt files should follow this format:<br>

`Use with:`<br><br>
`[Group, such as No Intro]`<br>
`[ROM file name and extension]`<br>
`[ROM Checksum]`<br>
`[CRC Checksum]`
