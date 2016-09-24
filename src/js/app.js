'use strict';

var player;

function loadContent() {
    var serverURL = "http://widevine.entitlement.theplatform.com/wv/web/ModularDrm/getWidevineLicense?" +
        "form=json" +
        "&schema=1.0" +
        "&token=R_x7NvSAfBcKYIzMIPp0IfCkwKCoUACo" +
        "&account=http://access.auth.theplatform.com/data/Account/2674231433" +
        "&_releasePid=OpQtOYBnlaKK";

    var protData = {
        "com.widevine.alpha": {
            serverURL: serverURL
        }
    };

//                controlbar.reset();
    player.setProtectionData(protData);
    player.attachSource("http://cdn1.tribe.id/2674232113/PACKHUUIVE0011770670/feature/HUUIV01_feature_750.mpd");

//                $scope.controlbar.enable();
}

function logError(e) {
    console.error(e);
}

$(document).ready(function() {
    var video = $("#videoContainer").find("video").get(0);

    player = dashjs.MediaPlayer().create();
    player.initialize(video, null, true);
    player.setFastSwitchEnabled(true);
    player.attachVideoContainer($("#videoContainer").get(0));

//                var controlBar = new ControlBar(player);
//                controlBar.initialize();
//                controlBar.disable();

    player.on(dashjs.MediaPlayer.events.ERROR, logError, this);

    var loadContentButton = $("BUTTON#uc-load-content");
    loadContentButton.bind("click", loadContent);
});
