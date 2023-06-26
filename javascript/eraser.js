class Eraser extends PaintFunction {
  constructor(contextReal) {
    super()
    this.context = contextReal
    this.color = currentColor
  }

  onMouseDown(coord, event) {
    this.context.strokeStyle = "#fff";
    this.context.lineJoin = "round";
    this.context.lineWidth = currentPenSize;
    this.context.setLineDash([])
    this.context.beginPath();
    this.context.moveTo(coord[0], coord[1]);
  }
  onDragging(coord, event) {
    this.context.lineTo(coord[0], coord[1]);
    this.context.stroke();
  }
  onMouseMove() { }
  onMouseUp() {
    this.context.strokeStyle = this.color;
  }
  onMouseLeave() { }
  onMouseEnter() { }
}
