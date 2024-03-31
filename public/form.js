document.addEventListener("DOMContentLoaded", () => {
  const submitForm = document.getElementById("submitForm");
  const successMessage = document.getElementById("successMessage");

  if (submitForm && successMessage) {
    submitForm.addEventListener("submit", async (event) => {
      event.preventDefault();

      const fullName = document.getElementById("fullName").value;
      const phoneNumber = document.getElementById("phoneNumber").value;
      const problemDescription =
        document.getElementById("problemDescription").value;

      const requestData = {
        fullName,
        phoneNumber,
        problemDescription,
      };

      try {
        const response = await fetch("/submit-request", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestData),
        });

        if (response.ok) {
          successMessage.style.display = "block";
          submitForm.reset();
        } else {
          console.error("Не удалось отправить запрос");
        }
      } catch (error) {
        console.error("Ошибка при отправке запроса:", error);
      }
    });
  } else {
    console.error(
      "Элемент формы или сообщения об успешном завершении не найдены"
    );
  }
});
