/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxDistance = function(grid) {
    const distanceGrid = []; // grid that would hold max distances for each cell
    const queue = [];
    for(let x = 0; x < grid.length; x++) {
        distanceGrid[x] = [];
        for(let y = 0; y < grid.length; y++) {
            if(grid[x][y]) {
                queue.push([x,y]); // push land to queue
                distanceGrid[x][y] = 0; // for land coords distance == 0
            }
            else {
                distanceGrid[x][y] = null; // null means unvisited
            }
        }
    }

    // if all land OR all water
    if(queue.length === grid.length**2 || queue.length === 0) {
        return -1;
    }

    let maxValue = -1;

    for(let cell = queue.shift(); cell !== undefined; cell = queue.shift()) {
        const [x, y] = cell;
        const value = distanceGrid[x][y];

        // increment neighbours of queued cell
        [[x-1,y], [x+1,y], [x,y-1], [x,y+1]].forEach(([x, y]) => {
            if((distanceGrid[x] && distanceGrid[x][y]) !== null) {
                //if not unvisited => jump to next
                return;
            } 
            distanceGrid[x][y] = value + 1;
            maxValue = Math.max(maxValue, value + 1);
            queue.push([x, y]);
        })
    }

    //return max distance recorded
    return maxValue;
}