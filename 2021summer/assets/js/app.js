// 我們將使用requestAnimationFrame方法來連續繪製video影像到canvas上
// 這裡先建立全域方法reqAnimation, 並指向當前裝置的requestAnimationFrame方法
window.reqAnimation = window.mozRequestAnimationFrame
    || window.webkitRequestAnimationFrame
    || window.msRequestAnimationFrame
    || window.requestAnimationFrame

// Canvas 工廠函式
function Canvas(width, height) {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    canvas.width = width
    canvas.height = height
    return [canvas, ctx]
}

// 取得video元素
const video = document.getElementById('demoVideo')
video.addEventListener('play', e => play())

// 取得控制video的button
document.querySelector('button')
    .addEventListener('click', event => {
        canvas1.width = video.videoWidth
        canvas1.height = video.videoHeight
        video.paused == false ? video.pause() : video.play()
    })

// 建立 canvas1 並插入body
const [canvas1, ctx1] = Canvas(video.width, video.height)
document.body.appendChild(canvas1)

// 當video元素觸發play事件時開始執行
function play() {
    // 繪圖
    computeFrame(video, ctx1)
    // 如果 video暫停, 或是已經播放完畢則停止繪圖
    if (video.paused || video.ended) return
    reqAnimation(play)
}

// 圖像繪製
function computeFrame(video, ctx = null) {
    const width = video.videoWidth
    const height = video.videoHeight

    // 這裡使用 vicdeo為來源，將影像化在ctx上
    ctx.drawImage(video, 0, 0, width, height)
}
