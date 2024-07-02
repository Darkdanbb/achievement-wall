import session from "@/util/session";

/**
 * 获取左侧成就栏的json数据
 */
export function getAchievementClassItems() {
    return session.post("/getAchievementClassItems");
}

export function uploadAchievementClassItemIcon(id, file) {
    return session.put("/uploadAchievementClassItemIcon", {id, file});
}

export function putAchievementClassItem(id, name, icon, description) {
    return session.put("/putAchievementClassItem", {id, name, icon, description});
}

export function getAchievementItemRoot(id) {
    return session.post("/getAchievementItemRoot/" + id);
}