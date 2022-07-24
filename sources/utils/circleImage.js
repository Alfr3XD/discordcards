/**
 * 
 * @param { CanvasRenderingContext2D } ctx 
 * @param { number } x 
 * @param { number } y 
 * @param { number } height 
 * @param { number} width 
 * @param { number } [f]
 * @param { number } [s]
 */
const circleImage = (ctx, x, y, height, width, f, s) => {
    ctx.beginPath();
    ctx.arc(x + 0.5 * width, y + 0.5 * height, 0.5 * width, 0, 2 * Math.PI);
    if (f) ctx.fill();
    if (s) ctx.stroke();
    ctx.closePath();
};
module.exports = circleImage;