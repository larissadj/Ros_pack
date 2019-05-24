<?xml version="1.0" encoding="UTF-8" ?>
<Package name="tablet_sample" format_version="4">
    <Manifest src="manifest.xml" />
    <BehaviorDescriptions>
        <BehaviorDescription name="behavior" src="spiel_drucktaster_finden" xar="behavior.xar" />
        <BehaviorDescription name="behavior" src="main" xar="behavior.xar" />
        <BehaviorDescription name="behavior" src="spielprinzip_erklaeren" xar="behavior.xar" />
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
    </Resources>
    <Topics />
    <IgnoredPaths>
        <Path src="translations/translation_de_DE.ts" />
        <Path src=".metadata" />
    </IgnoredPaths>
    <Translations auto-fill="en_US">
        <Translation name="translation_en_US" src="translations/translation_en_US.ts" language="en_US" />
    </Translations>
</Package>
