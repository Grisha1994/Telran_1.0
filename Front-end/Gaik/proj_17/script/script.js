class Graph{

    constructor(cvs, func, cvsWidth=500, cvsHeight=500, scale=22){
        this.func = func;
        this.ctx = cvs.getContext('2d');
        this.cvsWidth = cvsWidth;
        this.cvsHeight = cvsHeight;
        this.scale = scale;
        cvs.width = cvsWidth;
        cvs.height =cvsHeight;
    }

    axes(){

        const {ctx, cvsWidth, cvsHeight} = this;
        ctx.strokeStyle ='#000000';
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.moveTo(cvsWidth / 2, 0);
        ctx.lineTo(cvsWidth / 2, cvsHeight);
        ctx.moveTo(0, cvsHeight / 2);
        ctx.lineTo(cvsWidth, cvsHeight / 2);
        ctx.stroke();
        
    }

    grid(){
        const {scale, ctx, cvsWidth, cvsHeight} = this;
        ctx.strokeStyle ='#bdc3c7';
        ctx.lineWidth = 1;
            // -----ne pravilnii variant
            // for (let j = 0; j < cvsWidth / 2; j++) {
            //     for (let i = 0; i < cvsHeight / 2; i++) {
            //         ctx.strokeRect((cvsHeight / 2) + i * scale, (cvsWidth / 2)  +  j * scale, scale, scale)  
            //         ctx.strokeRect((cvsHeight / 2 - scale) - i * scale, (cvsWidth / 2 - scale)  -  j * scale, scale, scale)  
            //         ctx.strokeRect((cvsHeight / 2 ) - i * scale, (cvsWidth / 2)  +  j * scale, scale, scale)       
            //         ctx.strokeRect((cvsHeight / 2 ) + i * scale, (cvsWidth / 2)  -  j * scale, scale, scale)       
            // }
            const leftShift = (cvsWidth / 2) % scale - scale;
            const topShift = (cvsHeight / 2) % scale - scale;

            for (let j = 0; j <= cvsWidth / scale; j++) {
                for (let i = 0; i <= cvsHeight / scale; i++) {
                    ctx.strokeRect(leftShift + i * scale, topShift + j * scale, scale, scale)       
            }
        }
    } 

    coordinatesToPixels(x, y){
        const {scale, cvsWidth, cvsHeight} = this;
        const left =  cvsWidth / 2 + x * scale;
        const top = cvsHeight / 2 - y * scale;
        return [left, top];
    }


// написать цикл от -20 до 20
        // он должен вывести в консоль отступы с лева и сверху для точек 
        // числа от -20 до 20 это x и пропустив этот x через функцию func мы получаем y

render (){
    const {func, ctx, scale} = this;
    for (let i = -20; i <= 20; i++) {
        const y = func(i);

        console.log(this.coordinatesToPixels(i, y));
        
        ctx.beginPath();
        ctx.arc(...this.coordinatesToPixels(i, y), scale / 4, 0, Math.PI * 2);
        ctx.fill();
    }
}

}


const cvs = document.querySelector('#cvs');
const graph = new Graph(cvs, Math.sin);

graph.grid();
graph.axes();
graph.render();