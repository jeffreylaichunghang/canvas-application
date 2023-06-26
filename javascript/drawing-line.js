class DrawingLine extends PaintFunction {
  constructor(contextReal) {
    super();
    this.context = contextReal;
  }

  onMouseDown(coord, event) {
    this.context.strokeStyle = currentColor;
    this.context.lineJoin = "round";
    this.context.lineWidth = currentPenSize;
    this.context.beginPath();
    dashedLine === true ? this.context.setLineDash(dashParameter) : this.context.setLineDash([])
    this.context.moveTo(coord[0], coord[1]);
  }
  onDragging(coord, event) {
    this.draw(coord[0], coord[1]);
  }

  onMouseMove() { }
  onMouseUp() { }
  onMouseLeave() { }
  onMouseEnter() { }

  draw(x, y) {
    this.context.lineTo(x, y);
    this.context.stroke();
  }
}
