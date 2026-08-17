Bazaru de Gozaru (no Game de Gozaru)
English Translation 1.0
December 20, 2021
Copyright 2021 by Dave Shadoff


CONTENTS
--------
bazaru_english_1.0.txt - This file
Bazaru_English_1.0.ips - IPS patch for track 2 when in Mode 1/2048 format
                         size = 88,843 bytes


---------------
About the Patch
===============

The game is fully playable in English.
This patch has been made available for free.
Commercial use is strictly forbidden--including but not limited to "repros."



ABOUT Bazaru de Gozaru
----------------------

History
-------
This is a pretty fun puzzle game that was released toward the end of
the PC Engine's life in 1996 by NEC Home Electronics.

Because it was released toward the end of the machine's lifetime, it
became rare, so there aren't many original copies out in the wild, and
it can fetch somewhat high prices.  If you do see copies of it, they
are possibly pressings by PCE Works, which to my knowledge were
unlicensed copies, created without permission.

I originally started looking at the game as a potential translation candidate
back in the 2003 to 2005 period, and went so far as locate all of the
graphical assets.  Since I don't consider myself good at art, I had planned to
give this to another pacth author to finish... but years passed without any
real interest.  Fast forward to the Covid period, and I met Diogo, and this
became one of our projects, with all remaining work taking place between October
and December of 2021.



Overview
--------
The premise is that you control a monkey to move around puzzles... but
you don't control him directly.  Instead, you choose actions from a short
menu, which he then follows, changing behavior at "action points".
Hopefully, the instructions you provide can guide him safely through each
level.

Are you a fan of "Rube Goldberg Machines" ?
If so, then this is the game for you.

After each stage, you can take your earnings (the money picked up along
the route through each puzzle), and purchase furnishings for Bazaru's home.

Although this game was originally targetted at children, it's fun for all
ages (and quite challenging at times !).


HOW TO APPLY THE PATCH
----------------------

I have included the patch in IPS format... this may pose a challenge
for some people, but it is really the best way for such a game.

IPS:
----
To apply the IPS patch, you need to have the data track(s),
specifically track 2 read from the disc as Mode 1, 2048-bytes per sector.

The way I did this, was to use NightWolve's "TurboRip" utility
which can be found here:
https://www.ysutopia.net/forums/index.php?topic=69.0

I suggest this utility, as it will extract the data and music
files appropriately, and force them to the original table-of-contents
values, in case you have a non-original copy... for example, like the
PCEWorks versions mentioned above.

The IPS is then applied to the data track (which is Track 2).  All of the
extracted data can then be used to burn a translated CDROM, using, for
example, ImgBurn software (among others).  Just be sure that the CUE
file references the newly-created data file rather than the original one.

Here's how you will know that you have the right "Track 2":
CRC32:  b88ebef8
MD5:    85bc9283c52b5df71eaccf000a8d6bee
SHA-1:  fbb7c39776683ba2d8ce5f9c161a9e514118cc84


Note: Since the Playstation came out, many people have been ripping
discs as 2352 bytes per sector.  This is not appropriate for this machine,
and simply confuses people.  The additional data (the difference between
2048 bytes and 2352 bytes per secotr) is error correction data, and needs
to be ignored for translators, and then re-generated later (by CD-ROM
burning or mastering software).



CREDITS
-------

Hacking, tools, translation, minor art and text: David Shadoff
Font work, Testing: Diogo Ribeiro
Support, Testing: MooZ



Technical Information
---------------------
I am setting up a GitHub repository which will hold much more
technical information about this patch.

Please take a look at:
https://github.com/dshadoff/PCE_xlate_BazarudeGozaru


BUGS
----
If you see any items missed or other odd behaviour in the patched game,
please file an issue on the GitHub repository cited above, or open
a conversation in the forums at:
http://www.romhacking.net/forum/



Keep the PC Engine alive !

