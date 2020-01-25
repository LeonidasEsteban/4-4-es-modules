class Draw {
  constructor(canvasEl) {
    this.canvas = canvasEl
    this.ctx = this.canvas.getContext('2d')
    this.image = new Image()
    this.image.setAttribute('crossOrigin', 'anonymous')
  }
  render(url) {
    this.image.setAttribute('src', url)
    this.ctx.font = '20px sans-serif'
    this.ctx.textBaseline = 'top'
    this.ctx.fillText('loading...', 0, 0, canvas.width)
    return new Promise((resolve, reject) => {
      this.image.addEventListener('load', () => {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.ctx.drawImage(this.image, 0, 0, this.canvas.width, this.canvas.height)
        resolve('listo para obtener colores')
      })
    })
  }
  colorPalette(quality = 90) {
    const imgData = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height).data
    const colors = []
    for (let i = 0; i < this.canvas.width * this.canvas.height; i = i + quality) {
      const offset = i * 4
      const alpha = imgData[offset + 3]
      if (alpha > 0) {
        const red = imgData[offset]
        const green = imgData[offset + 1]
        const blue = imgData[offset + 2]
        colors.push({ red, green, blue })
        console.log('%c color', `background: rgba(${red}, ${green}, ${blue})`)
      }
    }
    return colors
  }
}

export default Draw