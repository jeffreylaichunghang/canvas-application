class Eraser extends PaintFunction {
  constructor(contextReal) {
    super()
    this.context = contextReal
  }

  onMouseDown(coord, event) {
    this.context.strokeStyle = "#fff";
    this.context.lineJoin = "round";
    this.context.lineWidth = 5;

    this.context.beginPath();
    this.context.moveTo(coord[0], coord[1]);
  }
  onDragging(coord, event) {
    this.context.lineTo(coord[0], coord[1]);
    this.context.stroke();
  }
  onMouseMove() { }
  onMouseUp() { }
  onMouseLeave() { }
  onMouseEnter() { }
}
