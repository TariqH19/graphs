class ScatterPlotChart {
  constructor(_data, _chartTitle, _chartXLabel, _chartYLabel) {
    this.data = _data;
    this.chartTitle = _chartTitle;
    this.chartXLabel = _chartXLabel;
    this.chartYLabel = _chartYLabel;
    this.posX = 50;
    this.posY = 550;
    this.valueFontSize = 10;
    this.labelFontSize = 12;
    this.tickWeight = 1;
    this.showLabels = true;
    this.showValues = true;
    this.rotateLabels = true;
    this.margin = 30;
    this.spacing = 15;
    this.chartWidth = 400;
    this.chartHeight = 400;
    this.numTicks = 10;
    this.tickLength = 5;
    this.remainingSpace;
    this.barWidth;
    this.tickSpace;
    this.tickIncrement;
    this.maxValue;
    this.updateVals();
  }
  drawTitle() {
    textSize(18);
    textAlign(CENTER, CENTER);
    noStroke();
    fill(0);
    text(
      this.chartTitle,
      this.chartWidth / 2 - this.margin,
      -this.chartHeight - this.margin * 2
    );
  }
  drawXLabel() {
    textSize(18);
    textAlign(CENTER, CENTER);
    noStroke();
    fill(0);
    text(this.chartXLabel, this.chartWidth / 2 - this.margin, 120);
  }
  drawYLabel() {
    textSize(18);
    textAlign(CENTER, CENTER);
    noStroke();
    fill(0);
    push();
    translate(-this.margin * 2 - 20, -this.chartHeight / 2);
    rotate(PI / 2);
    text(this.chartYLabel, 0, 0);
    pop();
  }
  updateVals() {
    this.remainingSpace =
      this.chartWidth - this.margin * 2 - this.spacing * (this.data.length - 1);
    this.barWidth = this.remainingSpace / this.data.length;
    this.tickSpace = this.chartHeight / this.numTicks;
    let listValues = this.data.map(function (y) {
      return y.value;
    });
    this.maxValue = max(listValues);
    let listValues2 = this.data.map(function (x) {
      return x.wins;
    });
    this.maxValue2 = max(listValues2);
    this.tickIncrement = int(this.maxValue / this.numTicks);
    this.tickIncrement2 = int(this.maxValue2 / 20);
  }
  render() {
    push();
    translate(this.posX, this.posY);
    this.drawTitle();
    this.drawXLabel();
    this.drawYLabel();
    this.drawAxis();
    this.drawTicks();
    this.xDrawTicks();
    this.drawEllipse();
    pop();
  }

  scaledData2(_num) {
    let newValue2 = map(_num, 0, this.maxValue2, 0, this.chartWidth);
    return newValue2;
  }

  scaledData(_num) {
    let newValue = map(_num, 0, this.maxValue, 0, this.chartHeight);
    return newValue;
  }

  drawTicks() {
    textSize(this.valueFontSize);
    textAlign(RIGHT, CENTER);
    for (let i = 0; i <= this.numTicks; i++) {
      stroke(0, 100);
      strokeWeight(this.tickWeight);
      line(0, i * -this.tickSpace, -this.tickLength, i * -this.tickSpace);

      stroke(0, 40);
      strokeWeight(1);
      line(0, i * -this.tickSpace, this.chartWidth, i * -this.tickSpace);

      noStroke();
      fill(0, 100);
      text(i * this.tickIncrement, -10, -i * this.tickSpace);
    }
  }

  xDrawTicks() {
    textSize(this.valueFontSize);
    textAlign(RIGHT, CENTER);
    for (let i = 0; i < 28; i++) {
      noStroke();
      fill(0, 100);
      text(i * this.tickIncrement2, i * this.spacing, this.spacing);
    }
  }

  drawAxis() {
    translate(-this.margin, 0);
    //y Axis
    strokeWeight(1);
    stroke(0);
    line(0, 0, 0, -this.chartHeight);
    //x Axis
    strokeWeight(1);
    stroke(0);
    line(0, 0, this.chartWidth, 0);
  }

  ellipseScale(_val) {
    let ellipseVal = map(_val, 1, 222, 5, 35);
    return ellipseVal;
  }

  drawEllipse() {
    translate(0, 0);
    for (let i = 0; i < this.data.length; i++) {
      fill(colors[i % colors.length]);

      ellipse(
        this.scaledData2(this.data[i].wins),
        this.scaledData(-this.data[i].value),
        this.ellipseScale(this.data[i].value2)
      );
      if (this.showLabels) {
        push();
        noStroke();
        fill(0);
        textSize(this.labelFontSize);
        textAlign(LEFT, CENTER);
        translate(i * (this.barWidth + this.spacing) + this.barWidth / 2, 10);

        //text(this.scaledData2(this.data[i].wins), 0, 0);
        pop();
      }
      if (this.showValues) {
        if (this.rotateLabels) {
          push();
          noStroke();
          fill(0);
          textSize(this.labelFontSize);
          textAlign(CENTER, CENTER);
          translate(
            this.scaledData2(this.data[i].wins) - 40,
            this.scaledData(-this.data[i].value)
          );
          if (this.data[i].value2 > 70) {
            text(this.data[i].label, 0, 0);
          }

          pop();
        } else {
          noStroke();
          fill(0);
          textSize(this.labelFontSize);
          textAlign(RIGHT, BOTTOM);
          text(
            this.data[i].label,
            0,
            i * (this.barHeight + this.spacing) + this.barHeight / 2
          );
        }
      }
    }
  }
}
