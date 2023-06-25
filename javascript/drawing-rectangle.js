/**********************************************
 * Drawing Rectangle Functionality
 * ==================================
 * This class extends the PaintFunction class, which you can find in canvas-common
 ***********************************************/
// https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/clearRect

class DrawingRectangle extends PaintFunction {
  constructor(contextReal, contextDraft) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
  }

  onMouseDown(coord, event) {
    fillColor === false ? this.contextDraft.strokeStyle = currentColor : this.contextDraft.fillStyle = currentColor
    fillColor === false ? this.contextReal.strokeStyle = currentColor : this.contextReal.fillStyle = currentColor
    this.origX = coord[0];
    this.origY = coord[1];
    this.contextDraft.fillStyle = currentColor;
    this.contextReal.fillStyle = currentColor;
    this.contextDraft.lineWidth = currentPenSize;
    this.contextReal.lineWidth = currentPenSize;
    dashedLine === true ? this.contextDraft.setLineDash(dashParameter) : this.contextDraft.setLineDash([])
    dashedLine === true ? this.contextReal.setLineDash(dashParameter) : this.contextReal.setLineDash([])
  }

  onDragging(coord, event) {
    this.contextDraft.clearRect(
      0,
      0,
      canvasDraft.width,
      canvasDraft.height
    );
    if (fillColor === false) {
      this.contextDraft.strokeRect(
        this.origX,
        this.origY,
        coord[0] - this.origX,
        coord[1] - this.origY
      );
    } else {
      this.contextDraft.fillRect(
        this.origX,
        this.origY,
        coord[0] - this.origX,
        coord[1] - this.origY
      );
    }
  }

  onMouseMove() { }

  // Committing the element to the canvas
  onMouseUp(coord) {
    // Clearing the rectangle first
    this.contextDraft.clearRect(
      0,
      0,
      canvasDraft.width,
      canvasDraft.height
    );
    // Commit that drawing to context real
    // Without this commit, it won't actually draw

    if (fillColor === false) {
      this.contextReal.strokeRect(
        this.origX,
        this.origY,
        coord[0] - this.origX,
        coord[1] - this.origY
      );
    } else {
      this.contextReal.fillRect(
        this.origX,
        this.origY,
        coord[0] - this.origX,
        coord[1] - this.origY
      );
    }
  }
  onMouseLeave() { }
  onMouseEnter() { }
}
