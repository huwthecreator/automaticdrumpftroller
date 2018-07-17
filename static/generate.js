$(document).ready(() => {
    $("#trolldrumpf-button").click(() => {
        $.post("/api/generate", (jsonData) => {
            $("#generatedName").text(jsonData.name)
        })
    })
})