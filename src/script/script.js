document.getElementById("downloadPdf").addEventListener("click", function () {
  // Use jsPDF to generate PDF
  const pdf = new jsPDF({
    orientation: "landscape",
    unit: "px",
    format: [256, 160],
  })

  // Get the front and back sides of the card
  const frontCard = document.getElementById("idCardFront")
  const backCard = document.getElementById("idCardBack")

  // Add front side to PDF
  pdf.html(frontCard, {
    callback: function (pdf) {
      // Add back side on the next page
      pdf.addPage()
      pdf.html(backCard, {
        callback: function (pdf) {
          pdf.save("id_card.pdf")
        },
      })
    },
  })
})
