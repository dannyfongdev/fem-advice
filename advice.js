class Advice {

  // Fetch weather from API
  async getAdvice() {
    const response = await fetch("https://api.adviceslip.com/advice");

    const responseData = await response.json();

    return responseData.slip;
  }

}