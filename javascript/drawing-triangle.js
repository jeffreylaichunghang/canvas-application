class DrawingTriangle extends PaintFunction {
  constructor(contextReal, contextDraft) {
    super()
    this.contextReal = contextReal;
    this.contextDraft = contextDraft
  }

  onMouseDown(coord, event) {
    this.origX = coord[0];
    this.origY = coord[1];
    //this.contextReal.beginPath();
    //this.contextReal.moveTo(this.origX, this.origY)
    console.log(`coordinates: ${this.origX},${this.origY}`)
  }
  onDragging(coord, event) {
    console.log(coord[0], coord[1])
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
    this.contextDraft.stroke()
  }
  onMouseMove() { }
  onMouseUp(coord, event) {
    this.contextReal.moveTo(this.origX, this.origY)
    this.contextReal.lineTo(coord[0], coord[1])
    this.contextReal.lineTo(this.origX * 2 - coord[0], coord[1])
    this.contextReal.closePath()
    this.contextReal.stroke()
  }
  onMouseLeave() { }
  onMouseEnter() { }
}
