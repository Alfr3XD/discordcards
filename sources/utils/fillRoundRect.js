/**
* @param { CanvasRenderingContext2D } ctx 
* @param { number } x 
* @param { number } y 
* @param { number } w 
* @param { number } h 
* @param { number | {tl: number, tr: number, br: number, bl: number} } r 
* @param { boolean } [f]? 
* @param { boolean } [s]? 
*/
const fillRoundRect=(ctx,x,y,w,h,r,f,s)=>{if(typeof r==="number")r={tl:r,tr:r,br:r,bl:r};else {var defaultRadius={tl:0,/*alfr3xd*/tr:0,br:0,bl:0};for(var side in defaultRadius){r[side]=r[side]||/*zeew*/defaultRadius[side]}};/*ashray*/ctx.beginPath();ctx.moveTo(x + r.tl, y);/*curves*/ctx.lineTo(x + w - r.tr, y);ctx.quadraticCurveTo(x+w, y, x + w, y + r.tr);ctx.lineTo(x + w, y + h - r.br);ctx.quadraticCurveTo(x + w, y + h, x + w - r.br, y + h);ctx.lineTo(x + r.bl, y + h);ctx.quadraticCurveTo(x, y + h, x, y + h - r.bl);ctx.lineTo(x, y + r.tl);ctx.quadraticCurveTo(x, y, x + r.tl, y);ctx.closePath();if(f)ctx.fill();if(s)ctx.stroke();};/*Export*/module.exports=fillRoundRect;