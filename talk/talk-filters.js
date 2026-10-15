document.addEventListener("DOMContentLoaded", () => {
  const rows = [...document.querySelectorAll(".talk-row")];
  const typeSelect = document.querySelector("#talk-type");
  const yearSelect = document.querySelector("#talk-year");
  const resetButton = document.querySelector("#talk-reset");
  const empty = document.querySelector("#talk-empty");

  if (!rows.length || !typeSelect || !yearSelect || !resetButton || !empty) return;

  const types = [...new Set(rows.map(row => row.dataset.talkType))].sort();
  const years = [...new Set(rows.map(row => row.dataset.talkYear))].sort((a, b) => b.localeCompare(a));

  for (const type of types) typeSelect.add(new Option(type, type));
  for (const year of years) yearSelect.add(new Option(year, year));

  function update() {
    let visible = 0;
    for (const row of rows) {
      const matchesType = !typeSelect.value || row.dataset.talkType === typeSelect.value;
      const matchesYear = !yearSelect.value || row.dataset.talkYear === yearSelect.value;
      row.hidden = !(matchesType && matchesYear);
      if (!row.hidden) visible++;
    }
    empty.hidden = visible !== 0;
  }

  typeSelect.addEventListener("change", update);
  yearSelect.addEventListener("change", update);
  resetButton.addEventListener("click", () => {
    typeSelect.value = "";
    yearSelect.value = "";
    update();
  });

  update();
});
