export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/api/waitlist") {
      if (request.method !== "POST") {
        return json({ error: "Method not allowed." }, 405);
      }

      try {
        const body = await request.json();
        const email = String(body.email || "").trim().toLowerCase();
        const twitch = String(body.twitch || "").trim();
        const message = String(body.message || "").trim();

        if (!isValidEmail(email)) {
          return json({ error: "Please enter a valid email address." }, 400);
        }

        if (twitch.length > 120 || message.length > 2000) {
          return json({ error: "One of the fields is too long." }, 400);
        }

        await env.DB.prepare(
          `INSERT INTO waitlist (email, twitch, message)
           VALUES (?1, ?2, ?3)
           ON CONFLICT(email) DO UPDATE SET
             twitch = CASE WHEN excluded.twitch <> '' THEN excluded.twitch ELSE waitlist.twitch END,
             message = CASE WHEN excluded.message <> '' THEN excluded.message ELSE waitlist.message END`
        ).bind(email, twitch, message).run();

        return json({
          ok: true,
          message: "You're on the list. Thanks for your interest in HalapaBot."
        }, 200);
      } catch (error) {
        return json({ error: "Could not save your signup. Please try again." }, 500);
      }
    }

    return new Response("Not found", { status: 404 });
  }
};

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.length <= 254;
}

function json(data, status) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "content-type": "application/json; charset=UTF-8",
      "cache-control": "no-store"
    }
  });
}
