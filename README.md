# RAPatches

This is a patch repository for RetroAchievements.org. Please open issues for requests and/or error reports. However, please **do not** make hash-linking requests here; patches in this repo are for hashes that have already been linked.<br><br>

# Goals
- Eliminate the need for referencing GoodTools. It hasn't been updated in years and needs to be phased out.
- Provide patches for various hacks, translations, subsets, bug fixes, etc. This includes older versions or abandoned projects where the patches are no longer available.

# Contribution Guidelines
## Bases and Formats
- Patches must be intended to be used with No Intro or Redump bases.
- Do not submit patches to be used with GoodTools or TOSEC unless there are absolutely no other options. This should only be relevant with very few unlicensed or homebrew games.
- The majority of patches are and should be in BPS format. IPS is allowed for NES due to headers and xDelta is allowed for larger files. DO NOT use any other format without a very good reason for doing so.
## Naming Scheme
- Patches for hacks that have their own RetroAchievements entry do not need a special naming scheme, at least until we come up with one.
- Patches for Subsets should be named according to their RetroAchivements entry. For example: `Mega Man [Subset - Bonus]`. 
- Patches for translations, bug fixes, etc. should be named after the base ROM with the patch info added. Follow this format (not all tags will be applicable): `[MSU-1]` -> `Title` -> `(Region)` -> `(Base ROM Version)` -> `(Language/Patch Type)` -> `(Patch Version)` -> `(Patch Author)` For example: `ToeJam & Earl (USA, Europe, Korea) (Fr) (v0.9) (sky2048).bps`. If something is unknown, then leave it blank. It can always be added later.
- Languages must be abbreviated as so:
```
En English
Ja Japanese
Fr French
De German
Es Spanish
It Italian
Nl Dutch
Pt Portuguese
Sv Swedish
No Norwegian
Da Danish
Fi Finnish
Zh Chinese
Ko Korean
Pl Polish
El Greek
Ro Romanian
Fl Filipino
Ar Arabic
Tu Turkish
Eo Esperanto
La Latin
```
## Compression
- Patches are then compressed to either .zip or .7z, with those following a `GAMEID-GameTitleWithoutSpaces` naming scheme for linking purposes.
- Whenever possible, please group similar patches together. If a game has five different Russian translations, we do not need a separate link for each one. Just throw them all into the same .zip/.7z. This applies to language patches as well as patches with various versions.
- Please... please... stop using WinRAR for submissions. I always have to redo them because even .zips done with WinRAR do not allow editing the contents of the archive, which can happen frequently for some patches.
## Readme
- Be sure to include a readme.txt in the .zip/.7z that states which ROM the patch is intended to be used with.
- The readme.txt files should follow this format:<br>
`Use with:`<br><br>
`[Group, such as No Intro]`<br>
`[ROM file name and extension]`<br>
`[ROM Checksum]`<br>
`[CRC Checksum]`
- For `[ROM Checksum]`, use the MD5 of a file instead of the RA Hash. 
## Other Info
- While not required, people will forever remember you as a nice person if you include .cue files with patches for disc-based games. Filenames for .cue files should match the name of the patch.


