export class Block{
    constructor(x, y, h, w){
        this.x = x;
        this.y = y;
        this.height = h;
        this.width = w;
        this.maxX = this.width + x;
        this.maxY = this.height + y;
    }

    draw(ctx){
        ctx.fillStyle = 'red';
        ctx.fillRect(this.x, this.y, this.width, this.height)
        
        ctx.beginPath();
        ctx.fillStyle = 'yellow';
        ctx.moveTo(this.x, this.y + this.height);
        ctx.lineTo(this.x - 50, this.y+this.height+30);
        ctx.lineTo(this.maxX - 50, this.y+this.height+30);
        ctx.lineTo(this.maxX, this.y+this.height);
        ctx.lineTo(this.x, this.y + this.height);
        ctx.fill();
        ctx.stroke();
    }
}

