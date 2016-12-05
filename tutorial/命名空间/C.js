var BB;
(function (BB) {
    function F() {
        console.log("F");
    }
    BB.F = F;
})(BB || (BB = {}));
