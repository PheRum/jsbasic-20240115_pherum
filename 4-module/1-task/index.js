function makeFriendsList(friends) {
  const ul = document.createElement("ul");

  const items = Array.from(friends).map(({ firstName, lastName }) => {
    const li = document.createElement("li");
    li.textContent = `${firstName} ${lastName}`;

    return li;
  });

  ul.append(...items);

  return ul;
}
