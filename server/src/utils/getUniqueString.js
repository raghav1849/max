import crypto from "crypto";

export function generateUniqueId(fields, length) {
    let result = "";

    for (let i = 0; i < length; i++) {
        // Randomly select a field from the provided array
        const randomField = fields[Math.floor(Math.random() * fields.length)];

        // Randomly select a character from the alphanumeric characters
        const randomCharacter = Math.random().toString(36).substring(2, 3);

        // Concatenate the random character from the selected field
        result += randomField + randomCharacter;
    }

    // Hash the result using SHA-256
    const uniqueId = crypto.createHash("sha256").update(result).digest("hex");

    // Trim the result to the specified length
    return uniqueId.slice(0, length);
}
