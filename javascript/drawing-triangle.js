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
    console.log(currentColor)
    if (currentColor === "#ffffff") {
      this.contextReal.strokeStyle = "#000000"
      this.contextDraft.strokeStyle = "#000000"
    } else {
      this.contextReal.strokeStyle = "#ffffff"
      this.contextDraft.strokeStyle = "#ffffff"
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
    this.contextDraft.moveTo(this.origX, this.origY)
    this.contextDraft.lineTo(coord[0], coord[1])
    this.contextDraft.lineTo(this.origX * 2 - coord[0], coord[1])
    this.contextDraft.closePath()
    this.contextDraft.fill()
    this.contextDraft.stroke()
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
    this.contextReal.moveTo(this.origX, this.origY)
    this.contextReal.lineTo(coord[0], coord[1])
    this.contextReal.lineTo(this.origX * 2 - coord[0], coord[1])
    this.contextReal.closePath()
    this.contextReal.fill()
    this.contextReal.stroke()
  }
  onMouseLeave() { }
  onMouseEnter() { }
}
