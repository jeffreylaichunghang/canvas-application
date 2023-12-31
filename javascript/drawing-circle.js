class DrawingCircle extends PaintFunction {
  constructor(contextReal, contextDraft) {
    super()
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
  }

  onMouseDown(coord, event) {
    this.origX = coord[0]
    this.origY = coord[1] // center point

    fillColor === false ? this.contextDraft.strokeStyle = currentColor : this.contextDraft.fillStyle = currentColor;
    fillColor === false ? this.contextReal.strokeStyle = currentColor : this.contextReal.fillStyle = currentColor;
    this.contextDraft.lineWidth = currentPenSize;
    this.contextReal.lineWidth = currentPenSize;
  }
  onDragging(coord, event) {
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height)
    this.contextDraft.beginPath()
    dashedLine === true ? this.contextDraft.setLineDash(dashParameter) : this.contextDraft.setLineDash([])
    let r = Math.sqrt(Math.pow((coord[0] - this.origX), 2) + Math.pow((coord[1] - this.origY), 2))
    this.contextDraft.arc(this.origX, this.origY, r, 0, 2 * Math.PI);
    fillColor === false ? this.contextDraft.stroke() : this.contextDraft.fill()
  }
  onMouseMove() { }
  onMouseUp(coord, event) {
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height)
    this.contextReal.beginPath()
    dashedLine === true ? this.contextReal.setLineDash(dashParameter) : this.contextReal.setLineDash([])
    let r = Math.sqrt(Math.pow((coord[0] - this.origX), 2) + Math.pow((coord[1] - this.origY), 2))
    this.contextReal.arc(this.origX, this.origY, r, 0, 2 * Math.PI);
    fillColor === false ? this.contextReal.stroke() : this.contextReal.fill();
  }
  onMouseLeave() { }
  onMouseEnter() { }
}
