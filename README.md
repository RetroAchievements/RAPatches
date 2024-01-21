# RAPatches
This is a patch repository for RetroAchievements.org. Please open issues for requests and/or error reports. However, please **do not** make hash-linking requests here; patches in this repo are for hashes that have already been linked.

# Goals
- Provide patch back-ups for various hacks, translations, subsets, bug fixes, etc. This includes older versions or abandoned projects where the patches are no longer publicly available.
- Eliminate the need for referencing GoodTools. It hasn't been updated in years and needs to be phased out.

# Contribution Guidelines
## Bases and Formats
The following table shows the preferred base and format for each of RA's supported consoles:
| Console   | Preferred Base | Preferred Patch Format |
|:------:|:------:|:------:|
|Amstrad CPC|CleanCPCdb|BPS|
|Apple IIe|Woz-A-Day<br>Tosec|BPS|
|Arduboy|No Intro<br>itch.io|BPS|
|Atari - 2600|No Intro|BPS|
|Atari - 7800|No Intro|BPS<br>IPS can be used if they bypass headers|
|Atari - Jaguar|No Intro|BPS|
|Atari - Jaguar CD|Redump<br>No Intro's Non-Redump DAT|xDelta<br>64-Bit BPS|
|Atari - Lynx|No Intro|BPS<br>IPS can be used if they bypass headers|
|Bandai - WonderSwan<br>Bandai - WonderSwan Color|No Intro|BPS|
|Coleco - Colecovision|No Intro|BPS|
|Elektor - TV Games Computer|N/A|BPS|
|Emerson - Arcadia 2001|No Intro|BPS|
|Fairchild - Channel F|No Intro|BPS|
|GCE - Vectrex|No Intro|BPS|
|Interton - VC-4000|No Intro|BPS|
|Magnavox Odyssey2|No Intro|BPS|
|Mattel - Intellivision|No Intro|BPS|
|Microsoft - MSX|No Intro (for .rom)<br>TOSEC (for dsk)|BPS|
|Microsoft - MSX2|No Intro (for .rom/.mx2)<br>TOSEC (for dsk)|BPS|
|NEC - PC-Engine - TurboGrafx-16|No Intro|BPS<br>IPS can be used if they bypass headers|
|NEC - PC Engine CD - TurboGrafx CD|Redump<br>No Intro's Non-Redump DAT|xDelta<br>64-Bit BPS|
|NEC - PC-8001 - PC-8801|Neo Kobe<br>TOSEC|BPS|
|NEC - PC-FX|Redump|xDelta<br>64-Bit BPS|
|Nintendo - Famicom Disk System|No Intro|BPS|
|Nintendo - Game Boy|No Intro|BPS|
|Nintendo - Game Boy Advance|No Intro|BPS|
|Nintendo - Game Boy Color|No Intro|BPS|
|Nintendo - Nintendo 64|No Intro|BPS|
|Nintendo - Nintendo DS|No Intro|BPS<br>xDelta for larger files|
|Nintendo - Nintendo DSi|No Intro|BPS<br>xDelta for larger files|
|Nintendo - Nintendo Entertainment System<br>Nintendo - Famicom|No Intro|IPS, but use [this guide](https://github.com/RetroAchievements/RAPatches/wiki/Creating-New-NES-Patches)|
|Nintendo - Pokemon Mini|No Intro|BPS|
|Nintendo - Super Nintendo Entertainment System|No Intro|BPS|
|Nintendo - Virtual Boy|No Intro|BPS|
|Panasonic - 3DO|Redump<br>No Intro's Non-Redump DAT|xDelta<br>64-Bit BPS|
|Sega - 32X|No Intro|BPS|
|Sega - Dreamcast|Redump<br>No Intro's Non-Redump DAT|xDelta<br>64-Bit BPS|
|Sega - Game Gear|No Intro|BPS|
|Sega - Master System|No Intro|BPS|
|Sega - Mega Drive - Genesis|No Intro|BPS|
|Sega - Saturn|Redump<br>No Intro's Non-Redump DAT|xDelta<br>64-Bit BPS|
|Sega - Sega CD - Mega CD|Redump<br>No Intro's Non-Redump DAT|xDelta<br>64-Bit BPS|
|Sega - SG-1000|No Intro|BPS|
|SNK - Neo Geo CD|Redump<br>No Intro's Non-Redump DAT|xDelta<br>64-Bit BPS|
|SNK - Neo Geo Pocket<br>SNK - Neo Geo Pocket Color|No Intro|BPS|
|Sony - PlayStation|Redump<br>No Intro's Non-Redump DAT|xDelta<br>64-Bit BPS|
|Sony - PlayStation 2|Redump<br>No Intro's Non-Redump DAT|xDelta<br>64-Bit BPS|
|Sony - PlayStation Portable|Redump<br>No Intro|xDelta<br>64-Bit BPS|
|Uzebox|N/A|BPS|
|WASM-4|N/A|BPS|
|Watara - Supervision|No Intro|BPS|
|Wellback - Mega Duck|No Intro|BPS|

- Please do not submit patches to be used with `GoodTools` or `TOSEC` bases unless there are absolutely no other options. This should only be relevant with very few unlicensed or homebrew games, but even those are quickly becoming DAT'd by `No Intro`.
- Sometimes, patches have their own patchers. Please avoid these unless they're actually necessary. A good example are the patchers that are commonly used with Dreamcast patches.
- Patches that are over 100MB currently cannot be added to the repo. I'm open to options that will bypass this.
## Naming Scheme
- Patches for subsets should be named according to their RetroAchivements entry. For example:
    - `Mega Man [Subset - Bonus].ips`
- Patches for translations, bug fixes, etc. should be named after the base ROM's name and region with the patch info added. If the base ROM has languages included in the name, these should be omitted since it'll make translation patches a bit confusing. Follow this format (not all tags will be applicable): `Title` -> `(Region)` -> `(Base ROM Version)` -> `(Language/Patch Type)` -> `(Patch Version)` -> `(Patch Author)` For example:
    - `ToeJam & Earl (USA, Europe, Korea) (Fr) (v0.9) (sky2048).bps`
    - `Shaman King - Master of Spirits (Europe) (It) (v1.0d) (Mentz).bps`
- Patches for hacks that have their own RetroAchievements entry do not need a special naming scheme, at least until we come up with one. If they're for a game that gets a lot of hacks, prefacing the title with the base (either normal or abbreviated) is fine. For example:
    - `SMW - Super Marina World (v2.2.01) (kona).bps`
    - `SMW - Mario Forever (v1.4) (beasteye89).bps`
    - `Pokemon FireRed - Orange Islands (Beta) (v5.6) (kalarie).bps`
    - `Sonic 1 - Lunacy (Demo) (Masochistic Maniacs).bps`
    - `Sonic 1 - Jester's Challenge (v1.0) (MarkeyJester).bps`
    - `Sonic 3 & Knuckles - Hellfire Saga (v2.0) (Red Miso Studios).bps`
        - `S3&K - Hellfire Saga (v2.0) (Red Miso Studios).bps` is also acceptable
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
- Version number should be formatted as such: `(v1.4)`.
    - If a version number isn't available, then a patch date `(YearMonthDay)` will also work: `(v20240120)`.
    - If a version number and patch date are unavailable, but the patch is listed as "Final", "Alpha", "Beta", etc., use those.
    - If you don't know the version number or author, then skip them or put `(Unknown)`.
- If something is unknown, then leave it blank. It can always be added later.

## Compression
- Patches are then compressed to either .zip or .7z, with those following a `GAMEID-GameTitleWithoutSpaces` naming scheme for linking purposes.
- Whenever possible, please group similar patches together. If a game has five different Russian translations, we do not need a separate link for each one. Just throw them all into the same .zip/.7z. This applies to language patches as well as patches with various versions.
- Please... please... stop using WinRAR for submissions. I always have to redo them because even .zips done with WinRAR do not allow editing the contents of the archive, which can happen frequently for some patches.
## Readme
- Be sure to include a readme.txt in the .zip/.7z that states which ROM the patch is intended to be used with.
- The readme.txt files should follow this format:<br>
`Use with:`<br><br>
`(Group, such as No Intro)`<br>
`[ROM file name and extension]`<br>
`[ROM Checksum]`<br>
`[CRC Checksum]`
- For `[ROM Checksum]`, always use the MD5 of a file instead of the RA Hash.
- I recommend the following to make all of this easier:
    - [GameHeader](https://www.romhacking.net/utilities/931/)
    - [RapidCRC](https://rapidcrc.sourceforge.net/)
## Other Info
- While not required, people will forever remember you as a nice person if you include `.cue` files with patches for disc-based games. Filenames for `.cue` files should match the name of the patch. Same goes for `.m3u` files.


