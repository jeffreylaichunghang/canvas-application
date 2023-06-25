class DrawingTriangle extends PaintFunction {
  constructor(contextReal, contextDraft) {
    super()
    this.contextReal = contextReal;
    this.contextDraft = contextDraft
  }

  onMouseDown(coord, event) {
    this.origX = coord[0];
    this.origY = coord[1];
    this.contextDraft.fillStyle = currentColor
    this.contextReal.fillStyle = currentColor
    this.contextDraft.lineWidth = currentPenSize
    this.contextReal.lineWidth = currentPenSize

    if (fillColor === false) {
      this.contextReal.strokeStyle = currentColor
      this.contextDraft.strokeStyle = currentColor
    } else {
      this.contextReal.fillStyle = currentColor
      this.contextDraft.fillStyle = currentColor
    }
  }
  onDragging(coord, event) {
    this.contextDraft.clearRect(
      0,
      0,
      canvasDraft.width,
      canvasDraft.height
    );
    this.contextDraft.beginPath();
    dashedLine === true ? this.contextDraft.setLineDash(dashParameter) : this.contextDraft.setLineDash([])
    this.contextDraft.moveTo(this.origX, this.origY)
    this.contextDraft.lineTo(coord[0], coord[1])
    this.contextDraft.lineTo(this.origX * 2 - coord[0], coord[1])
    this.contextDraft.closePath()
    fillColor === false ? this.contextDraft.stroke() : this.contextDraft.fill();
  }
  onMouseMove() { }
  onMouseUp(coord, event) {
    this.contextDraft.clearRect(
      0,
      0,
      canvasDraft.width,
      canvasDraft.height
    );
    this.contextReal.beginPath();
    dashedLine === true ? this.contextReal.setLineDash(dashParameter) : this.contextReal.setLineDash([])
    this.contextReal.moveTo(this.origX, this.origY)
    this.contextReal.lineTo(coord[0], coord[1])
    this.contextReal.lineTo(this.origX * 2 - coord[0], coord[1])
    this.contextReal.closePath()
    fillColor === false ? this.contextReal.stroke() : this.contextReal.fill();
  }
  onMouseLeave() { }
  onMouseEnter() { }
}
