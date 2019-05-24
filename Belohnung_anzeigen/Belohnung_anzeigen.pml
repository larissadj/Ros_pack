<?xml version="1.0" encoding="UTF-8" ?>
<Package name="tablet_sample" format_version="4">
    <Manifest src="manifest.xml" />
    <BehaviorDescriptions>
        <BehaviorDescription name="behavior" src="main" xar="behavior.xar" />
        <BehaviorDescription name="behavior" src="elefant_imitieren" xar="behavior.xar" />
        <BehaviorDescription name="behavior" src="maus_imitieren" xar="behavior.xar" />
        <BehaviorDescription name="behavior" src="gorilla_imitieren" xar="behavior.xar" />
        <BehaviorDescription name="behavior" src="disco_tanzen" xar="behavior.xar" />
        <BehaviorDescription name="behavior" src="tai_chi_chuan_tanzen" xar="behavior.xar" />
        <BehaviorDescription name="behavior" src="gitar_spielen" xar="behavior.xar" />
        <BehaviorDescription name="behavior" src="saxofon_spielen" xar="behavior.xar" />
        <BehaviorDescription name="behavior" src="headbang_tanzen" xar="behavior.xar" />
    </BehaviorDescriptions>
    <Dialogs />
    <Resources>
        <File name="README" src="README.md" />
        <File name="style" src="html/css/style.css" />
        <File name="jquery-3.1.0.min" src="html/js/jquery-3.1.0.min.js" />
        <File name="icon" src="icon.png" />
        <File name="index" src="html/index.html" />
        <File name="script" src="html/js/script.js" />
        <File name="pepper" src="html/pepper.png" />
        <File name="elephant" src="elefant_imitieren/elephant.ogg" />
        <File name="Solitary" src="html/Solitary.png" />
        <File name="music_all" src="html/music_all.ogg" />
        <File name="swiftswords_ext" src="tai_chi_chuan_tanzen/swiftswords_ext.mp3" />
        <File name="taichimove" src="tai_chi_chuan_tanzen/taichimove.pmt" />
        <File name="epicsax" src="saxofon_spielen/epicsax.ogg" />
    </Resources>
    <Topics />
    <IgnoredPaths>
        <Path src=".metadata" />
    </IgnoredPaths>
    <Translations auto-fill="en_US">
        <Translation name="translation_en_US" src="translations/translation_en_US.ts" language="en_US" />
    </Translations>
</Package>
