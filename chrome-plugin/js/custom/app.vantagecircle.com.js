(function() {
    let originalUDAPluginSDKRecordUserClick = UDAPluginSDK.recorduserclick;
    UDAPluginSDK.recorduserclick = function(node, fromdocument=false, selectchange=false, event, confirmdialog=false, hasparentclick = false){
        if(this.recording && (node.parentNode && node.parentNode.hasAttribute("ng-controller") && node.parentNode.getAttribute("ng-controller")==='recognize_modal')) {
            // fix for nominate recording functionality.
            alert('Sorry currently we do not support this Nominate feature. Please re-record the sequence without selecting Nominate feature');
            this.recording=false;
            this.cancelrecordingsequence();
            this.showadvancedhtml();
            return ;
        }
        originalUDAPluginSDKRecordUserClick.apply(this, arguments);
    };
})();
