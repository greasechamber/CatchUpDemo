document.addEventListener("DOMContentLoaded", () => {
  const dateInputFrom = document.getElementById("dateInputFrom");
  const selectedDateFrom = document.getElementById("selectedDateFrom");

  const dateInputTo = document.getElementById("dateInputTo");
  const selectedDateTo = document.getElementById("selectedDateTo");

  selectedDateFrom.addEventListener("click", () => {
    dateInputFrom.showPicker();
  });

  selectedDateTo.addEventListener("click", () => {
    dateInputTo.showPicker();
  });

  dateInputFrom.addEventListener("change", () => {
    selectedDateFrom.textContent = formatDate(dateInputFrom.value);
    localStorage.setItem("fromDate", dateInputFrom.value);
  });

  dateInputTo.addEventListener("change", () => {
    selectedDateTo.textContent = formatDate(dateInputTo.value);
    localStorage.setItem("toDate", dateInputTo.value);
  });

  function formatDate(value) {
    const [year, month, day] = value.split("-").map(Number);
    const date = new Date(year, month - 1, day); // month is 0-based
    return date.toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const fromDate = localStorage.getItem("fromDate");
  const toDate = localStorage.getItem("toDate");

  if (fromDate) {
    document.getElementById("dateInputFrom").value = fromDate;
    document.getElementById("selectedDateFrom").textContent = formatDate(fromDate);
  }

  if (toDate) {
    document.getElementById("dateInputTo").value = toDate;
    document.getElementById("selectedDateTo").textContent = formatDate(toDate);
  }

  // function formatDate(value) {
  //   const date = new Date(value);
  //   return date.toLocaleDateString(undefined, {
  //     year: "numeric",
  //     month: "short",
  //     day: "numeric",
  //   });
  // }

  // function formatDateFixed(value) {
  //   const date = new Date(value);
  //   date.setMinutes(date.getMinutes() + date.getTimezoneOffset()); // fix UTC shift
  //   return date.toLocaleDateString(undefined, {
  //     year: "numeric",
  //     month: "short",
  //     day: "numeric",
  //   });
  // }

  function formatDate(value) {
    const [year, month, day] = value.split("-").map(Number);
    const date = new Date(year, month - 1, day); // month is 0-based
    return date.toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const dateInputFrom = document.getElementById("dateInputFrom");
  const dateInputTo = document.getElementById("dateInputTo");

  const confirmButton = document.getElementById("confirmButton"); // Add an id to the button

  confirmButton.addEventListener("click", () => {
    const fromDate = new Date(dateInputFrom.value);
    const toDate = new Date(dateInputTo.value);

    if (!dateInputFrom.value || !dateInputTo.value) {
      alert("Please select both dates.");
    } else if (fromDate > toDate) {
      alert("⚠️ 'From' date must be before the 'To' date. Please re-enter.");
    } else {
      alert("✅ Date range applied successfully!");
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const currentPage = window.location.href;
  const navStack = JSON.parse(localStorage.getItem("navStack")) || [];

  // Prevent duplicate consecutive entries
  if (navStack[navStack.length - 1] !== currentPage) {
    navStack.push(currentPage);
    localStorage.setItem("navStack", JSON.stringify(navStack));
  }

  const btn = document.getElementById('unfollowBtn');
  if (!btn) return;

  btn.addEventListener('click', () => {
    if (btn.textContent.trim() === 'Unfollow') {
      // → Follow
      btn.textContent = 'Follow';
      btn.classList.remove('btn-unfollow');
      btn.classList.add('btn-follow');
    } else {
      // → Unfollow
      btn.textContent = 'Unfollow';
      btn.classList.remove('btn-follow');
      btn.classList.add('btn-unfollow');
    }
  });
});

document.getElementById("backButton").addEventListener("click", () => {
  let navStack = JSON.parse(localStorage.getItem("navStack")) || [];

  if (navStack.length > 1) {
    // Pop current page
    navStack.pop();
    const previousPage = navStack.pop(); // get the one before
    localStorage.setItem("navStack", JSON.stringify(navStack));
    window.location.href = previousPage;
  }
});

document.addEventListener('DOMContentLoaded', () => {
  // —— Self-profile actions ——
  const editBtn    = document.getElementById('editBtn');
  const saveBtn    = document.getElementById('saveBtn');
  const cancelBtn  = document.getElementById('cancelBtn');
  const signOutBtn = document.getElementById('signOutBtn');
  const deleteBtn  = document.getElementById('deleteBtn');
  const bioDiv     = document.querySelector('.bio-text');

  // Guard: only on self‐profile page
  if (editBtn && bioDiv) {
    editBtn.addEventListener('click', () => {
      // swap bio → textarea
      const textarea = document.createElement('textarea');
      textarea.className = 'bio-text-edit mono';
      textarea.value = bioDiv.textContent.trim();
      textarea.style.height = bioDiv.offsetHeight + 'px';
      bioDiv.replaceWith(textarea);

      // hide/show buttons
      editBtn.style.display    = 'none';
      saveBtn.style.display    = 'block';
      cancelBtn.style.display  = 'block';
      if (signOutBtn) signOutBtn.style.display = 'none';
      if (deleteBtn)  deleteBtn.style.display  = 'none';
    });

    saveBtn.addEventListener('click', () => {
      const textarea = document.querySelector('.bio-text-edit');
      const newBio = textarea.value.trim() || 'N/A';
      bioDiv.textContent = newBio;
      textarea.replaceWith(bioDiv);

      // restore button visibility
      editBtn.style.display    = 'block';
      saveBtn.style.display    = 'none';
      cancelBtn.style.display  = 'none';
      if (signOutBtn) signOutBtn.style.display = 'block';
      if (deleteBtn)  deleteBtn.style.display  = 'block';

      // TODO: persist newBio via API/localStorage
    });

    cancelBtn.addEventListener('click', () => {
      const textarea = document.querySelector('.bio-text-edit');
      textarea.replaceWith(bioDiv);

      // restore
      editBtn.style.display    = 'block';
      saveBtn.style.display    = 'none';
      cancelBtn.style.display  = 'none';
      if (signOutBtn) signOutBtn.style.display = 'block';
      if (deleteBtn)  deleteBtn.style.display  = 'block';
    });
  }

  // —— Sign Out ——
  if (signOutBtn) {
    signOutBtn.addEventListener('click', () => {
      if (confirm('Are you sure you want to sign out?')) {
        window.location.href = 'wrapped_Baby.html';
      }
    });
  }

  // —— Delete Account ——
  if (deleteBtn) {
    deleteBtn.addEventListener('click', () => {
      if (confirm('This will permanently delete your account. Proceed?')) {
        alert('Your account has been deleted.');
        window.location.href = 'wrapped_Baby.html';
      }
    });
  }
});