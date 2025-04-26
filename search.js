document.getElementById("x1").addEventListener("click", () => {
	const element = document.getElementById("srow1");
	element.style.display = "none";
});

document.getElementById("x2").addEventListener("click", () => {
	const element = document.getElementById("srow2");
	element.style.display = "none";
});

document.getElementById("x3").addEventListener("click", () => {
	const element = document.getElementById("srow3");
	element.style.display = "none";
});

document.getElementById("x4").addEventListener("click", () => {
	const element = document.getElementById("srow4");
	element.style.display = "none";
});



var users; 


if (post_search) {
	document.getElementById("contacts-button").addEventListener("click", () => {
		window.location.href = 'search.html';
	});
	
	document.getElementById("v_button").addEventListener("click", () => {
		window.location.href = 'html/social_media/wrapped_Baby.html';
	});

	document.getElementById("ps_button").addEventListener("click", () => {
		window.location.href = 'html/social_media/wrapped_Beach.html';
	});
	
	document.getElementById("c_button").addEventListener("click", () => {
			window.location.href = 'html/social_media/wrapped_Cat.html';
	});

	document.getElementById("j_button").addEventListener("click", () => {
		window.location.href = 'html/social_media/wrapped_Beach.html';
	});
	
	users = [
	  { name: "veratar", rowId: "srow1" },
	  { name: "psikoe", rowId: "srow2" },
	  { name: "commonkat", rowId: "srow3" },
	  { name: "jacksonabat", rowId: "srow4" }
	];
}
else {
	document.getElementById("posts-button").addEventListener("click", () => {
		window.location.href = 'post-search.html';
	});

	document.getElementById("b_button").addEventListener("click", () => {
		window.location.href = 'html/profiles/profile_Bob.html';
	});

	document.getElementById("m_button").addEventListener("click", () => {
		window.location.href = 'html/profiles/profile_Margaret.html';
	});

	document.getElementById("ph_button").addEventListener("click", () => {
		window.location.href = 'html/profiles/profile_Philip.html';
	});

	document.getElementById("g_button").addEventListener("click", () => {
		window.location.href = 'html/profiles/profile_Greg.html';
	});
	
	users = [
	  { name: "bob", rowId: "srow1" },
	  { name: "margaret", rowId: "srow2" },
	  { name: "phillip", rowId: "srow3" },
	  { name: "greg", rowId: "srow4" }
	];

}

document.getElementById("search-bar").addEventListener("input", () => {
  const query = document.getElementById("search-bar").value.toLowerCase();

  users.forEach(user => {
    const row = document.getElementById(user.rowId);
    if (row) {
      if (user.name.startsWith(query)) {
        row.style.display = "flex"; 
      } else {
        row.style.display = "none";
      }
    }
  });
});







