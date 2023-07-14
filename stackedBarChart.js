class StackedBarChart {
  constructor(_data, _chartTitle, _chartXLabel, chartYLabel) {
    this.data = _data;
    this.chartTitle = _chartTitle;
    this.chartXLabel = _chartXLabel;
    this.chartYLabel = chartYLabel;
    this.posX = 50;
    this.posY = 450;
    this.valueFontSize = 12;
    this.labelFontSize = 14;
    this.tickWeight = 1;
    this.showLabels = true;
    this.showValues = true;
    this.rotateLabels = true;
    this.margin = 30;
    this.spacing = 5;
    this.chartWidth = 400;
    this.chartHeight = 400;
    this.numTicks = 10;
    this.tickLength = 5;
    this.remainingSpace;
    this.barWidth;
    this.tickSpace;
    this.tickIncrement;
    this.maxValue;
    this.total = [];
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
      -this.chartHeight - this.margin
    );
  }
  drawXLabel() {
    textSize(18);
    textAlign(CENTER, CENTER);
    noStroke();
    fill(0);
    text(this.chartXLabel, this.chartWidth / 2 - this.margin, 140);
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
    let listValues = this.data.map(function (x) {
      return x.value;
    });

    this.tickIncrement = int(this.maxValue / this.numTicks);
    let sumOfValues;
    for (let i = 0; i < this.data.length; i++) {
      sumOfValues = this.data[i].value.reduce(
        (prevValue, curValue) => (this.total[i] = prevValue + curValue)
      );
    }
    //this.maxValue = max(sumOfValues);
    this.maxValue = max(this.total);
    //console.log(this.maxValue);
    //console.log(data)
  }
  render() {
    push();
    translate(this.posX, this.posY);
    this.drawTitle();
    this.drawXLabel();
    this.drawYLabel();
    this.drawAxis();
    this.drawTicks();
    this.drawBars();
    pop();
  }

  drawTicks() {
    textSize(12);
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

  scaledData(_num) {
    let newValue = map(_num, 0, this.maxValue, 0, this.chartHeight);
    return newValue;
  }

  drawBars() {
    translate(this.margin, 0);
    for (let i = 0; i < this.data.length; i++) {
      if (this.showLabels) {
        if (this.rotateLabels) {
          push();
          noStroke();
          fill(0);
          textSize(this.labelFontSize);
          textAlign(LEFT, CENTER);
          translate(i * (this.barWidth + this.spacing) + 5, this.spacing);
          rotate(PI / 2);
          text(this.data[i].label, 0, 0);
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

      push();
      for (let j = 0; j < this.data[i].value.length; j++) {
        fill(colors[j % colors.length]);
        stroke(0);
        strokeWeight(0);
        rect(
          i * (this.barWidth + this.spacing),
          0,
          this.barWidth,
          this.scaledData(-this.data[i].value[j])
        );
        translate(0, this.scaledData(-this.data[i].value[j]));
        if (this.showValues) {
          noStroke();
          fill(0);
          textSize(this.valueFontSize);
          textAlign(CENTER, BOTTOM);
          text(
            this.data[i].value[j],
            i * (this.barWidth + this.spacing) + this.barWidth / 2,
            this.scaledData(this.data[i].value[j]) / 2
          );
        }
      }
      pop();
    }
  }
}
