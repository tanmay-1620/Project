document.addEventListener('click', function(event) {
    var isClickInsideCoverageBox = event.target.closest('.coverage-box');
    var isClickInsideViewCoverage = event.target.classList.contains('view-coverage');
    if (!isClickInsideCoverageBox && !isClickInsideViewCoverage) {
        var expandedBoxes = document.querySelectorAll('.coverage-box.expanded');
        expandedBoxes.forEach(function(box) {
            box.classList.remove('expanded');
        });
    }
});

document.querySelectorAll('.view-coverage').forEach(function(element) {
    element.addEventListener('click', function(event) {
        var box = event.target.closest('.coverage-box');
        box.classList.toggle('expanded');
    });
});
