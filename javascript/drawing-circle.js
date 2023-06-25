class DrawingCircle extends PaintFunction {
  constructor(contextReal, contextDraft) {
    super()
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
  }

  onMouseDown(coord, event) {
    this.origX = coord[0]
    this.origY = coord[1] // center point
    this.contextReal.strokeStyle = currentColor;
    this.contextReal.lineWidth = currentPenSize;
    this.contextDraft.strokeStyle = currentColor;
    this.contextDraft.lineWidth = currentPenSize;
  }
  onDragging(coord, event) {
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height)
    this.contextDraft.beginPath()
    let r = Math.sqrt(Math.pow((coord[0] - this.origX), 2) + Math.pow((coord[1] - this.origY), 2))
    this.contextDraft.arc(this.origX, this.origY, r, 0, 2 * Math.PI);
    this.contextDraft.stroke();
  }
  onMouseMove() { }
  onMouseUp(coord, event) {
    this.contextReal.beginPath()
    let r = Math.sqrt(Math.pow((coord[0] - this.origX), 2) + Math.pow((coord[1] - this.origY), 2))
    this.contextReal.arc(this.origX, this.origY, r, 0, 2 * Math.PI);
    this.contextReal.stroke();
  }
  onMouseLeave() { }
  onMouseEnter() { }
}
