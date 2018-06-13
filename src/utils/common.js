export const Common = {
    isWX : function () {
        var ua = navigator.userAgent||'',uk = "MicroMessenger/";
        return ua.indexOf(uk) > -1;
    },
}
