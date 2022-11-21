import { paper } from 'paper';

export default function waves(canvas) {
    paper.setup(canvas);

    let h = window.innerHeight,
        w = window.innerWidth,
        horizon = h / 2,
        pathCounts = 11,
        pathPoints = 10,
        strokeWidth = 1,
        strokeColor = '#9fb9cb',
        speed = 1.1,
        offset = 1.5,
        frequency = [0, -30, 50, -50, -35, 35, 0, -30, 50, -50, -35, 35, -30, 50, -50, -35, 35],
        delay = 0.9,
        path = [];

    function initializePath() {
        h = window.innerHeight;
        w = window.innerWidth;
        horizon = h / 2;

        //clear
        paper.project.activeLayer.removeChildren();

        for (let i = 0; i < pathCounts; i++) {
            path[i] = new paper.Path();

            path[i].add(new paper.Point(-10, h));
            path[i].add(new paper.Point(-10, horizon));

            for (let p = 0; p < pathPoints - 1; p++) {
                path[i].add(new paper.Point(w / (pathPoints - 1) * p + p, horizon + frequency[p]));
            }

            path[i].add(new paper.Point(w + 10, horizon));
            path[i].add(new paper.Point(w + 10, h));

            path[i].strokeWidth = strokeWidth;
            path[i].strokeColor = strokeColor;

            if (i === 0) {
                path[i].fillColor = '#FFFFFF';
            }

            path[i].smooth();
        }
    }
    initializePath();

    paper.view.onFrame = function(event) {
        for (let p = 0; p < pathCounts; p++) {
            for (let s = 0; s < pathPoints; s++) {
                // skip first two points because they are the base of the path
                let value = (s % 2) ? -1 : 1;
                let segment = path[p].segments[2 + s];
                segment.point.y = horizon + ((Math.sin((event.time + s * delay) * speed)) * (frequency[s] * value + (p * offset * value)));
            }
        }
    }

    window.onresize = function() {
        initializePath();
    }
}