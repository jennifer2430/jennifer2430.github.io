function toggle(link) {
    console.log(link)
    console.log(link.id)
    const courseID = `${link.id.match("(.*)-link")[1]}-content`
    console.log(courseID)
    document.getElementById(courseID).classList.toggle("unseen")
}