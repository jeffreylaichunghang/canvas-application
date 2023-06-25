class DrawingStraightLine extends PaintFunction {
  constructor(contextReal, contextDraft) {
    super()
    this.contextReal = contextReal
    this.contextDraft = contextDraft
  }
  onMouseDown(coord) {
    this.origX = coord[0]
    this.origY = coord[1]
    this.contextReal.strokeStyle = currentColor
    this.contextReal.lineWidth = currentPenSize
    this.contextDraft.strokeStyle = currentColor
    this.contextDraft.lineWidth = currentPenSize
  }
  onDragging(coord) {
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height)
    this.contextDraft.beginPath()
    this.contextDraft.moveTo(this.origX, this.origY)
    this.contextDraft.lineTo(coord[0], coord[1])
    this.contextDraft.stroke()
  }
  onMouseMove() { }
  onMouseUp(coord) {
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height)
    this.contextReal.beginPath()
    this.contextReal.moveTo(this.origX, this.origY)
    this.contextReal.lineTo(coord[0], coord[1])
    this.contextReal.stroke()
  }
  onMouseLeave() { }
  onMouseEnter() { }
}
