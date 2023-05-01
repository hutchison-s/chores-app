export default function setStorage(list, deleted) {
    const data = {
        list: list,
        deleted: deleted
    };
    window.localStorage.setItem("choresData", JSON.stringify(data));
}