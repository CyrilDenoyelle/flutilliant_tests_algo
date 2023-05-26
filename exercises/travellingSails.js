
travellingSails = (heights, daySpeed, nightSpeed) => {

    if (heights.length != daySpeed.length || heights.length != nightSpeed.length) {
        throw new Error("Arrays must have the same length");
    }

    const snails = heights.map((height, index) => {
        return {
            height,
            daySpeed: daySpeed[index],
            nightSpeed: nightSpeed[index],
            flag: index + 1
        }
    }).map(snail => {
        const { height, daySpeed, nightSpeed } = snail;

        if (daySpeed - nightSpeed <= 0) snail.time = Infinity;
        snail.time = 0;

        let snailPosition = 0;
        while (snailPosition < height) {
            snailPosition += daySpeed;
            if (snailPosition >= height) break;
            snailPosition -= nightSpeed;
            snail.time += 1;
        }

        return snail;
    });

    return snails
        .sort((snailA, snailB) => snailA.time - snailB.time)
        .map(snail => snail.flag);

}

module.exports = travellingSails;

