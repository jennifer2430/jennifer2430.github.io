function toggle(link) {
    const courseID = `${link.id.match("(.*)-link")[1]}-content`
    document.getElementById(courseID).classList.toggle("unseen")
}