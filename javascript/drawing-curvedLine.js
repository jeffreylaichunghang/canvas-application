class DrawingCurvedLine extends PaintFunction {
  constructor(contextReal, contextDraft) {
    super()
    this.contextReal = contextReal
    this.contextDraft = contextDraft
    this.controlPoint = false
    this.dragging = false
  }

  onMouseDown(coord, event) {
    if (this.controlPoint === false) {
      this.origX = coord[0]
      this.origY = coord[1]
    }
    this.contextDraft.strokeStyle = currentColor
    this.contextReal.strokeStyle = currentColor
    this.contextDraft.lineWidth = currentPenSize;
    this.contextReal.lineWidth = currentPenSize;
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
    this.contextDraft.moveTo(this.origX, this.origY);
    if (this.controlPoint === false) {
      console.log('dragging')
      this.dragging = true
      this.contextDraft.lineTo(coord[0], coord[1])
      this.contextDraft.stroke()
    } else {
      this.cp1 = coord[0]
      this.cp2 = coord[1]
      this.contextDraft.quadraticCurveTo(this.cp1, this.cp2, this.ep1, this.ep2)
      this.contextDraft.stroke()
    }
  }
  onMouseMove() { }
  onMouseUp(coord, event) {
    // confirm the last coordinates
    if (this.controlPoint === false) {
      //confirm the control points and end points
      if (this.dragging == true) {
        this.controlPoint = true
      }
      this.ep1 = coord[0]
      this.ep2 = coord[1]
      this.cp1 = Math.abs((coord[0] - this.origX) / 2)
      this.cp2 = Math.abs((coord[1] - this.origY) / 2)
    } else {
      this.contextDraft.clearRect(
        0,
        0,
        canvasDraft.width,
        canvasDraft.height
      );
      this.contextReal.beginPath();
      dashedLine === true ? this.contextReal.setLineDash(dashParameter) : this.contextReal.setLineDash([])
      this.contextReal.moveTo(this.origX, this.origY);
      this.contextReal.quadraticCurveTo(this.cp1, this.cp2, this.ep1, this.ep2)
      this.contextReal.stroke()
      this.controlPoint = false
      this.dragging = false

      index -= 1 // so this drawing curved line function only increment the index by one only
      restoreArray.pop()
    }
  }
  onMouseLeave() { }
  onMouseEnter() { }
}
