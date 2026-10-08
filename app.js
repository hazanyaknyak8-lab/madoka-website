const mainFeatures = [
      ["Security", "Protect your server and keep members safe."],
      ["Automoderation", "Let automatic moderation handle the busywork."],
      ["Utility", "Helpful tools and useful server information."],
      ["Music", "Bring music and playback controls to voice."],
      ["Autoreact & responder", "Automate reactions and custom replies."],
      ["Moderation", "Manage members and keep conversations on track."],
      ["Autorole & Invc", "Manage roles and invitation rewards."],
      ["Fun", "Lighthearted commands for your community."],
      ["Games", "Play games together right in your server."],
      ["Ignore Channels", "Choose where bot commands should work."],
      ["Server", "Manage and explore your server."],
      ["Voice", "Voice-channel controls and management."],
      ["Welcomer", "Welcome members as they join."],
      ["Giveaway", "Create and manage community giveaways."],
      ["Ticket", "Organize member support with tickets."],
      ["Invite Tracker", "Keep track of server invitations."]
    ];
    const extraFeatures = ["Advance Logging", "Vanityroles", "Counting", "J2C", "AI", "Boost", "Leveling", "Sticky", "Verification", "Encryption", "Minecraft", "Joindm", "Birthday", "Customrole", "Premium"];
    const commandData = [
      ["Antinuke", "antinuke, antinuke enable, antinuke disable, antinuke status, antinuke modules, whitelist, whitelist @user, whitelistrole, whitelistrole @role, unwhitelist, unwhitelist @user, unwhitelistrole, unwhitelistrole @role, whitelisted, whitelist reset, extraowner, extraowner set, extraowner view, extraowner reset, nightmode, nightmode enable, nightmode disable"],
      ["Utility", "botinfo, stats, invite, serverinfo, userinfo, roleinfo, boostcount, unbanall, joined-at, ping, github, vcinfo, channelinfo, badges, banner user, banner server, reminder start, reminder clear, permissions, timer"],
      ["Media", "media, media setup, media remove, media config, media bypass, media bypass add, media bypass remove, media bypass show"],
      ["General", "status, afk, avatar, banner, servericon, membercount, poll, hack, token, users, wizz, urban, rickroll, hash, snipe, users, list boosters, list inrole, list emojis, list bots, list admins, list invoice, list mods, list early, list activedeveloper, list createpos, list roles, calculator"],
      ["Automod", "automod, automod enable, automod disable, automod punishment, automod config, automod logging, automod ignore, automod ignore channel, automod ignore role, automod ignore show, automod ignore reset, automod unignore, automod unignore channel, automod unignore role"],
      ["Blacklistword", "blacklistword, blacklistword add, blacklistword remove, blacklistword reset, blacklistword config, blacklistword bypass add <user/role>, blacklistword bypass remove <user/role>, blacklistword bypass show"],
      ["Moderation", "audit, warn, clearwarns, ban, clone, snipe, hide, hideall, kick, lock, mute, nick, nuke, role, roleicon, role all, role bots, role create, role delete, role humans, role rename, role temp, role unverified, slowmode, lockall, unlockall, steal, unban, unhide, unhideall, unlock, unslowmode, removerole all, removerole bots, removerole humans, removerole unverified, clear, clear all, clear bots, clear contains, clear embeds, clear files, clear images, clear mentions, clear reactions, clear user, deleteemoji, deletesticker, enlargetopcheck, topcheck enable, topcheck disable"],
      ["Music", "play, search, loop, autoplay, nowplaying, shuffle, stop, skip, seek, join, disconnect, replay, queue, clearqueue, pause, resume, volume, filter, filter enable, filter disable"],
      ["Fun", "/imagine, ship, mydog, chat, translate, howgay, lesbian, cute, intelligence, chutiya, horny, tharki, gif, iplookup, weather, hug, kiss, pat, cuddle, slap, tickle, spank, 8ball, truth, dare, nitro"],
      ["Games", "blackjack, chess, tic-tac-toe, country-guesser, rps, lights-out, wordle, 2048, memory-game, number-slider, battleship, connect-four, slots, counting"],
      ["Ignore Commands", "ignore, ignore command add, ignore command remove, ignore command show, ignore channel add, ignore channel remove, ignore channel show, ignore user add, ignore user remove, ignore user show, ignore bypass add, ignore bypass show, ignore bypass remove"],
      ["Setup", "setup, setup create, setup delete, setup list, setup staff, setup girl, setup friend, setup vip, setup guest, setup config, setup reset, staff, girl, friend, vip, guest"],
      ["Auto Role", "autorole bots add, autorole bots remove, autorole bots, autorole config, autorole humans add, autorole humans remove, autorole humans, autorole reset all, autorole reset bots, autorole reset humans, autorole"],
      ["Autoresponder", "autoresponder, autoresponder create, autoresponder delete, autoresponder edit, autoresponder config"],
      ["Auto React", "react, react add, react remove, react list, react reset"],
      ["Voice", "voice, voice kick, voice kickall, voice mute, voice muteall, voice unmute, voice unmuteall, voice deafen, voice deafenall, voice undeafen, voice undeafenall, voice move, voice moveall, voice pull, voice pullall, voice lock, voice unlock, voice private, voice unprivate"],
      ["VC Autorole", "vcrole add, vcrole remove, vcrole config"],
      ["Welcomer", "greet setup, greet reset, greet channel, greet edit, greet test, greet config, greet autodelete, greet"],
      ["Giveaway", "gstart, gend, greroll, glist"],
      ["Ticket", "/ticket setup, /ticket close, /ticket lock, /ticket claim, /ticket unlock, /ticket transcript"],
      ["Logging", "log, log enable, log disable, log config, log ignore, log status, log toggle"],
      ["Vanity", "vanityroles setup, vanityroles reset, vanityroles show"],
      ["InviteTracker", "invites, addinvites, inviteleaderboard, invitelogging"],
      ["Counting", "counting, counting enable/disable, counting channel #channel, counting stats, counting config continue/reset"],
      ["J2C", "j2csetup, j2creset"],
      ["AI", "ai activate, ai deactivate, ai analyze, ai analyse, ai code, ai explain, ai conversation-clear, ai mood-analyzer, ai personality, ai conversation-stats, ai summarize, ai ask, ai fact, ai database-clear, ai roleplay-enable, ai roleplay-disable"],
      ["Boost", "boost setup, boost message, boost channel, boostrole, boost config"],
      ["Leveling", "level status, level channel, level message, level desc, level color, level thumbnail, level image, level clearimage, level xprange, level multiplier, level addreward, level removereward, level rewards, level setxp, level preview, level xpboost, level xpboost add, level xpboost remove, level xpboost list, level blacklist, level blacklist channel, level blacklist role, level unblacklist, level unblacklist channel, level unblacklist role, level stats, level leaderboard, level reset, level reset user, level reset all, level placeholders, level rank"],
      ["Sticky", "sticky setup, sticky edit, sticky list, sticky remove"],
      ["Verification", "verification setup, verification status, verification enable, verification disable, verification logs, verification reset, verification verify, verification fix"],
      ["Birthday", "birthdaysetup, setbirthday, removebirthday, listbirthdays, birthday"],
      ["Joindm", "joindm enable, joindm disable, joindm message, joindm test"],
      ["Minecraft", "minecraft setup, minecraft reset, minecraft status"]
    ].map(([name, commands]) => [name, commands.split(",").map(command => command.trim()).filter(Boolean)]);
    const premiumCommandGroups = [
      ["Premium Activation", [
        ["premium redeem <code>", "Redeem a Premium code for this server. Requires Administrator permission."],
        ["premium status", "Check this server's Premium expiry and see who granted access."],
        ["premium trial", "Claim the 7-day Premium trial if this server is eligible."]
      ]],
      ["Server Backup", [
        ["backup create <n>", "Create a full backup of the server and save it as the provided name."],
        ["backup restore <n>", "Restore the saved server backup with the provided name."],
        ["backup list", "List the saved backups available for this server."],
        ["backup delete <n>", "Delete the saved backup with the provided name."]
      ]],
      ["Security+", [
        ["scan", "Run a deep scan of the server."],
        ["serverhealth", "View server health information and statistics."],
        ["ghostaudit", "Review the server's ghost-audit security information."]
      ]],
      ["Giveaways & LockRole", [
        ["gschedule", "Schedule a giveaway to run later."],
        ["gsgend", "End a scheduled giveaway."],
        ["gsreroll", "Reroll a giveaway to select a new winner."],
        ["glstart", "Start a global giveaway."],
        ["lockrole ...", "Manage the Premium lock role for server access controls."]
      ]],
      ["Premium Extras", [
        ["antiraid on/off", "Turn raid protection on or off."],
        ["serverlock [reason]", "Lock the server, optionally including a reason."],
        ["serverunlock [reason]", "Unlock the server, optionally including a reason."],
        ["fakepermit @user <permission>", "Run the Premium prank command for a selected member and permission."],
        ["embedbuilder", "Open the interactive embed builder."],
        ["reminder <time> <message>", "Schedule a reminder to be sent to you by direct message."]
      ]],
      ["Custom Bot Profile", [
        ["setavatar <url>", "Set a server-specific avatar for Madoka using an image URL."],
        ["setbanner <url>", "Set a server-specific banner for Madoka using an image URL."],
        ["setbio <text>", "Set a server-specific bio for Madoka."],
        ["resetbot", "Reset the server-specific Premium bot profile customization."]
      ]]
    ];

    const featureCard = ([name, description], extra = false) =>
      `<div class="feature-card${extra ? " extra" : ""}"><strong>${name}</strong><span>${description}</span></div>`;
    document.getElementById("main-features").innerHTML = mainFeatures.map(item => featureCard(item)).join("");
    document.getElementById("extra-features").innerHTML = extraFeatures.map(name => featureCard([
      name,
      name === "Premium" ? "Unlock exclusive commands, server backups, and custom bot profile options." : "An extra tool to customize your server experience."
    ], true)).join("");

    const commandGroups = document.getElementById("command-groups");
    const categoryFilter = document.getElementById("category-filter");
    const categoryPicker = document.getElementById("category-picker");
    const categoryFilterLabel = document.getElementById("category-filter-label");
    const commandSearch = document.getElementById("command-search");
    const resultCount = document.getElementById("result-count");
    const emptyState = document.getElementById("empty-state");
    const copyIcon = '<svg aria-hidden="true"><use href="#i-copy"></use></svg>';
    let selectedCommandCategory = "";
    const allCategoryOption = document.createElement("button");
    allCategoryOption.className = "category-picker-option";
    allCategoryOption.type = "button";
    allCategoryOption.setAttribute("role", "option");
    allCategoryOption.dataset.category = "";
    allCategoryOption.setAttribute("aria-selected", "true");
    allCategoryOption.textContent = "All categories";
    categoryFilter.append(allCategoryOption);
    commandData.forEach(([category, commands], index) => {
      const option = document.createElement("button");
      option.className = "category-picker-option";
      option.type = "button";
      option.setAttribute("role", "option");
      option.dataset.category = category;
      option.setAttribute("aria-selected", "false");
      option.textContent = category;
      categoryFilter.append(option);
      const group = document.createElement("section");
      group.className = "command-group";
      group.dataset.category = category;
      group.innerHTML = `<button class="group-head" type="button" aria-expanded="false"><span class="group-name"><span class="group-mark">${String(index + 1).padStart(2, "0")}</span>${category}</span><span class="group-count">${commands.length} ${commands.length === 1 ? "command" : "commands"}<svg aria-hidden="true"><use href="#i-chevron"></use></svg></span></button><div class="command-list" aria-hidden="true" inert><div class="command-list-inner">${commands.map(command => `<div class="command-item" data-command="${encodeURIComponent(command)}"><code class="command-name">${command.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;")}</code><button class="copy-button" type="button" aria-label="Copy ${command.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;")}" title="Copy command">${copyIcon}</button></div>`).join("")}</div></div>`;
      commandGroups.append(group);
    });

    const categoryDescriptions = {
      Antinuke: "Protects the server from destructive actions and lets trusted users bypass safeguards.",
      Utility: "Shows useful information about Madoka, members, roles, channels, and the server.",
      Media: "Configures media-channel behavior and channel-specific bypasses.",
      General: "Provides everyday server, member, and entertainment tools.",
      Automod: "Configures automatic moderation rules, logging, punishments, and exclusions.",
      Blacklistword: "Manages blocked words and the users or roles allowed to bypass them.",
      Moderation: "Helps staff manage members, messages, roles, and channel controls.",
      Music: "Controls music playback and the voice queue.",
      Fun: "Offers interactive, creative, and lighthearted community commands.",
      Games: "Starts games and puzzles that members can play together.",
      "Ignore Commands": "Controls which commands, channels, or users Madoka should ignore.",
      Setup: "Sets up and manages the server's staff and member groups.",
      "Auto Role": "Assigns or removes roles automatically when members or bots join.",
      Autoresponder: "Creates and manages automatic replies to matching messages.",
      "Auto React": "Sets up automatic reactions for messages.",
      Voice: "Manages voice-channel members and channel access.",
      "VC Autorole": "Configures roles associated with voice-channel activity.",
      Welcomer: "Sets up welcome messages and their destination channel.",
      Giveaway: "Starts, ends, rerolls, and lists server giveaways.",
      Ticket: "Creates and manages member-support tickets.",
      Logging: "Configures which server events Madoka records.",
      Vanity: "Sets up roles awarded for using a server vanity invite.",
      InviteTracker: "Tracks invitations and displays invite information or leaderboards.",
      Counting: "Configures the server counting channel and views counting stats.",
      J2C: "Sets up join-to-create voice channels.",
      AI: "Controls Madoka's AI tools, conversations, and settings.",
      Boost: "Configures server boost messages, channels, and roles.",
      Leveling: "Manages member XP, ranks, rewards, and leveling settings.",
      Sticky: "Creates and manages messages that stay visible in a channel.",
      Verification: "Sets up and manages the server's member verification flow.",
      Birthday: "Sets, removes, and lists member birthdays.",
      Joindm: "Configures direct messages sent to members when they join.",
      Minecraft: "Configures and checks Madoka's Minecraft server integration."
    };
    const specificCommandDescriptions = {
      ping: "Checks Madoka's response latency.",
      botinfo: "Shows information about Madoka.",
      stats: "Shows Madoka's available statistics.",
      invite: "Provides an invite link for Madoka.",
      serverinfo: "Shows information about the current server.",
      userinfo: "Shows information about a selected member.",
      roleinfo: "Shows information about a selected role.",
      avatar: "Displays a member's profile picture.",
      banner: "Displays a member or server banner.",
      servericon: "Displays the current server icon.",
      membercount: "Shows how many members are in the server.",
      poll: "Creates a poll for members to answer.",
      play: "Starts playing a requested track in voice.",
      queue: "Shows the current music queue.",
      warn: "Issues a moderation warning to a member.",
      ban: "Bans a member from the server.",
      kick: "Removes a member from the server.",
      mute: "Restricts a member from speaking.",
      unban: "Removes a member's server ban.",
      "gstart": "Starts a giveaway.",
      "glist": "Lists current giveaways.",
      gend: "Ends a giveaway.",
      "/imagine": "Creates an AI-generated image from a text prompt.",
      "ticket setup": "Creates the ticket panel members can use to contact server staff.",
      "ticket close": "Closes the current support ticket.",
      "ticket claim": "Assigns the current support ticket to you.",
      "ticket transcript": "Creates a transcript of the current support ticket.",
      whitelisted: "Lists users and roles currently trusted by the server's antinuke protection.",
      "banner user": "Displays the profile banner for a selected member.",
      "banner server": "Displays the current server banner.",
      permissions: "Checks the permissions available to a member or role.",
      enlargetopcheck: "Reviews role hierarchy and top-role protection for the server.",
      imagine: "Creates an AI-generated image from a text prompt.",
      howgay: "Returns a playful, fictional percentage for the fun command.",
      lesbian: "Runs a lighthearted community fun interaction.",
      cute: "Shows a playful cuteness result for a selected member.",
      intelligence: "Returns a fictional intelligence score for entertainment.",
      chutiya: "Runs a lighthearted community fun interaction.",
      horny: "Runs a playful, non-serious fun interaction.",
      tharki: "Runs a playful, non-serious fun interaction.",
      gif: "Finds a GIF matching the provided search.",
      iplookup: "Looks up public metadata for an IP address; it cannot identify a person's precise location.",
      nitro: "Runs a Nitro-themed fun interaction; it does not generate or grant Discord Nitro.",
      "country-guesser": "Starts a game where players guess a country.",
      "lights-out": "Starts the Lights Out puzzle game.",
      "2048": "Starts the number-merging puzzle game 2048.",
      "memory-game": "Starts a memory-matching game.",
      "number-slider": "Starts a sliding-number puzzle.",
      battleship: "Starts a Battleship game.",
      "connect-four": "Starts a Connect Four game.",
      staff: "Views or manages the server's staff setup role.",
      girl: "Views or manages the server's girl setup role.",
      friend: "Views or manages the server's friend setup role.",
      vip: "Views or manages the server's VIP setup role.",
      guest: "Views or manages the server's guest setup role.",
      addinvites: "Adds invite credits to a selected member.",
      inviteleaderboard: "Shows the members with the most tracked invites.",
      invitelogging: "Configures logging for tracked server invites.",
      j2csetup: "Sets up join-to-create voice channels for the server.",
      j2creset: "Resets the join-to-create voice-channel configuration.",
      boostrole: "Configures the role reward given to server boosters.",
      birthdaysetup: "Sets up the server's birthday feature and announcement options."
    };
    const commandRootDescriptions = {
      antinuke: "Protects the server from destructive events and manages its safety settings.",
      whitelist: "Manages members trusted by the server's antinuke protection.",
      whitelistrole: "Manages trusted roles for the server's antinuke protection.",
      unwhitelist: "Removes a member from the antinuke trusted list.",
      unwhitelistrole: "Removes a role from the antinuke trusted list.",
      extraowner: "Manages additional owners trusted by the server's protection tools.",
      nightmode: "Controls the server's night-mode protection settings.",
      reminder: "Creates or clears reminders for later.",
      automod: "Controls automatic moderation rules, punishments, logs, and exclusions.",
      blacklistword: "Manages blocked words, settings, and bypass lists.",
      role: "Manages server roles, including creating, assigning, and editing roles.",
      clear: "Bulk-deletes messages that match the selected criteria.",
      voice: "Manages members and access in voice channels.",
      play: "Plays a requested track in your current voice session.",
      search: "Finds available music matching your search.",
      queue: "Shows the tracks waiting in the music queue.",
      filter: "Controls audio filters for music playback.",
      greet: "Configures welcome messages and where they are sent.",
      setup: "Creates or updates a server feature configuration.",
      autorole: "Configures roles assigned automatically to joining members or bots.",
      autoresponder: "Creates and manages automatic replies to matching messages.",
      react: "Configures automatic reactions for messages.",
      log: "Configures which server events are recorded.",
      level: "Manages member XP, rank rewards, and leveling settings.",
      verification: "Configures and manages the server verification process.",
      birthday: "Manages member birthday dates and birthday features.",
      joindm: "Configures direct messages sent to new members.",
      minecraft: "Configures or checks Madoka's Minecraft integration.",
      ai: "Controls Madoka's AI features and conversation settings.",
      boost: "Configures server boost messages, channels, and role rewards.",
      sticky: "Creates and manages persistent channel messages.",
      media: "Configures media-channel behavior and bypass rules.",
      ignore: "Controls which commands, channels, or users Madoka ignores.",
      vcrole: "Manages roles associated with voice-channel activity.",
      counting: "Configures the counting channel and its server settings.",
      vanityroles: "Configures roles awarded for using a server vanity invite.",
      invites: "Shows tracked invitation information for this server.",
      gstart: "Starts a server giveaway.",
      gend: "Ends a server giveaway.",
      greroll: "Selects a new winner for a giveaway.",
      glist: "Lists active giveaways.",
      ban: "Bans a member from the server.",
      kick: "Removes a member from the server.",
      warn: "Issues a moderation warning to a member.",
      mute: "Restricts a member from speaking.",
      lock: "Prevents members from sending messages in a channel.",
      unlock: "Restores members' ability to send messages in a channel.",
      poll: "Creates a poll for server members.",
      avatar: "Displays a member's profile picture.",
      serverinfo: "Shows information about the current server.",
      userinfo: "Shows information about a selected member.",
      roleinfo: "Shows information about a selected role.",
      ping: "Checks Madoka's response latency.",
      ticket: "Manages member-support tickets.",
      tickets: "Manages member-support tickets.",
      backup: "Creates, lists, restores, or deletes saved server backups.",
      botinfo: "Shows Madoka's bot profile and information.",
      stats: "Shows Madoka's available statistics.",
      invite: "Provides a link to invite Madoka to a server.",
      boostcount: "Shows the server's current boost count.",
      unbanall: "Unbans all banned users from the server.",
      "joined-at": "Shows when a member joined the server.",
      github: "Shares Madoka's project repository.",
      vcinfo: "Shows information about the current voice channel.",
      channelinfo: "Shows details about a selected channel.",
      badges: "Shows a member's available Discord badges.",
      timer: "Sets a timer and notifies you when it ends.",
      status: "Shows or updates your current status.",
      afk: "Sets an away message for when members mention you.",
      hack: "Runs a fictional hacker-style fun interaction.",
      token: "Runs the token-themed fun command; it does not reveal account credentials.",
      users: "Lists members matching the selected server filter.",
      wizz: "Runs a server-wizzing action; review its effects before use.",
      urban: "Looks up a term in the Urban Dictionary.",
      rickroll: "Shares a Rickroll with the server.",
      hash: "Calculates a hash from the provided text.",
      snipe: "Shows a recently deleted message when available.",
      list: "Lists server members or items matching the selected list type.",
      calculator: "Calculates a mathematical expression.",
      audit: "Reviews recent moderation or server audit information.",
      clearwarns: "Clears a member's recorded warnings.",
      clone: "Clones the current channel.",
      hide: "Hides the current channel from members.",
      hideall: "Hides channels using the configured bulk action.",
      nick: "Changes a member's server nickname.",
      nuke: "Recreates the current channel; this is destructive and should be used carefully.",
      roleicon: "Changes or views a role's icon.",
      slowmode: "Sets the message slowmode for a channel.",
      lockall: "Locks channels using the configured bulk action.",
      unlockall: "Unlocks channels using the configured bulk action.",
      steal: "Saves an emoji or sticker from a message to the server.",
      unhide: "Makes the current channel visible to members again.",
      unhideall: "Restores channel visibility using the configured bulk action.",
      unslowmode: "Removes slowmode from a channel.",
      removerole: "Removes a role from selected server members.",
      deleteemoji: "Deletes a custom server emoji.",
      deletesticker: "Deletes a custom server sticker.",
      topcheck: "Checks or configures the server's top-role protection.",
      loop: "Sets the repeat mode for music playback.",
      autoplay: "Toggles automatic music recommendations after the queue ends.",
      nowplaying: "Shows the track currently playing.",
      shuffle: "Shuffles the current music queue.",
      stop: "Stops music playback and clears the active session.",
      skip: "Skips the currently playing track.",
      seek: "Jumps to a position in the current track.",
      join: "Connects Madoka to your voice channel.",
      disconnect: "Disconnects Madoka from the voice channel.",
      replay: "Restarts the currently playing track.",
      clearqueue: "Clears the current music queue.",
      pause: "Pauses music playback.",
      resume: "Resumes paused music playback.",
      volume: "Changes the music playback volume.",
      ship: "Creates a playful compatibility result for two members.",
      mydog: "Shows a dog-themed fun response.",
      chat: "Starts an interactive chat response.",
      translate: "Translates the provided text.",
      weather: "Looks up weather information for a location.",
      hug: "Sends a friendly hug interaction.",
      kiss: "Sends a friendly kiss interaction.",
      pat: "Sends a friendly pat interaction.",
      cuddle: "Sends a friendly cuddle interaction.",
      slap: "Sends a fictional slap interaction.",
      tickle: "Sends a playful tickle interaction.",
      spank: "Sends a fictional playful interaction.",
      "8ball": "Answers a question with a magic eight-ball style response.",
      truth: "Provides a truth prompt for a game.",
      dare: "Provides a dare prompt for a game.",
      blackjack: "Starts a game of blackjack.",
      chess: "Starts or manages a chess game.",
      "tic-tac-toe": "Starts a tic-tac-toe game.",
      rps: "Plays rock-paper-scissors.",
      wordle: "Starts a Wordle-style word guessing game.",
      slots: "Plays the slot machine game.",
      log: "Configures which server events are recorded.",
      "setbirthday": "Sets a member's birthday.",
      removebirthday: "Removes a saved member birthday.",
      listbirthdays: "Lists saved member birthdays."
    };
    const commandActionLabels = {
      enable: "Turn on",
      disable: "Turn off",
      on: "Turn on",
      off: "Turn off",
      add: "Add or assign",
      create: "Create",
      setup: "Set up",
      start: "Start",
      remove: "Remove",
      delete: "Delete",
      reset: "Reset",
      clear: "Clear",
      edit: "Edit",
      update: "Update",
      set: "Set",
      config: "View or change",
      status: "Check the current",
      show: "View",
      view: "View",
      list: "List",
      stats: "View statistics for",
      leaderboard: "View the leaderboard for",
      channel: "Set the channel for",
      role: "Manage roles for",
      user: "Manage a member in",
      bypass: "Manage bypass rules for"
    };
    const commandFeatureNames = {
      antinuke: "antinuke protection",
      whitelist: "trusted-member whitelist",
      whitelistrole: "trusted-role whitelist",
      unwhitelist: "trusted-member whitelist",
      unwhitelistrole: "trusted-role whitelist",
      extraowner: "additional trusted owners",
      nightmode: "night-mode protection",
      reminder: "reminders",
      automod: "automatic moderation",
      blacklistword: "blocked-word rules",
      role: "server roles",
      clear: "message cleanup",
      voice: "voice-channel members",
      play: "music playback",
      search: "music search",
      queue: "the music queue",
      filter: "music audio filters",
      greet: "welcome messages",
      setup: "this server feature",
      autorole: "automatic role assignment",
      autoresponder: "automatic replies",
      react: "automatic reactions",
      log: "server event logging",
      level: "member leveling",
      verification: "member verification",
      birthday: "member birthdays",
      joindm: "join direct messages",
      minecraft: "Minecraft integration",
      ai: "AI features",
      boost: "server boost rewards",
      sticky: "persistent channel messages",
      media: "media channel settings",
      ignore: "ignored commands, channels, and users",
      vcrole: "voice-channel roles",
      counting: "the server counting game",
      vanityroles: "vanity invite roles",
      invites: "server invite tracking",
      backup: "server backups",
      ban: "server bans",
      kick: "member access",
      warn: "member warnings",
      mute: "member speaking permissions",
      lock: "channel message permissions",
      unlock: "channel message permissions",
      poll: "server polls",
      ticket: "support tickets",
      tickets: "support tickets",
      gstart: "a server giveaway",
      gend: "a server giveaway",
      greroll: "giveaway winners",
      glist: "active giveaways"
    };
    function describeCommand(category, command) {
      const normalized = command.toLowerCase().replace(/^[>/]/, "").trim();
      if (specificCommandDescriptions[normalized]) return specificCommandDescriptions[normalized];
      const [root, ...subcommands] = normalized.split(/\s+/);
      const rootDescription = commandRootDescriptions[root];
      if (!rootDescription) return `${command.replace(/^[>/]/, "")} is a ${category.toLowerCase()} command. ${categoryDescriptions[category] || "Use it to manage a feature in your server."}`;
      const action = subcommands.find(part => Object.hasOwn(commandActionLabels, part));
      if (!action) return rootDescription;
      const actionLabel = commandActionLabels[action];
      const feature = commandFeatureNames[root] || root.replace(/[-_]/g, " ");
      return `${actionLabel} ${feature} for this server.`;
    }
    const docsCategoryGrid = document.getElementById("docs-category-grid");
    const docsSearch = document.getElementById("docs-search");
    const docsResultsPanel = document.getElementById("docs-results-panel");
    const docsResultsHeading = document.getElementById("docs-results-heading");
    const docsList = document.getElementById("docs-command-list");
    const docsEmpty = document.getElementById("docs-empty");
    const docsLoadMore = document.getElementById("docs-load-more");
    let selectedDocsCategory = "";
    let visibleDocCount = 8;
    const documentedCommands = commandData.flatMap(([category, commands]) => commands.map(command => {
      const description = describeCommand(category, command);
      return { category, command, description, search: `${category} ${command} ${description}`.toLowerCase() };
    }));
    commandData.forEach(([category, commands], index) => {
      const button = document.createElement("button");
      button.className = "docs-category-button";
      button.type = "button";
      button.dataset.category = category;
      button.setAttribute("aria-pressed", "false");
      const mark = document.createElement("span");
      mark.className = "docs-category-icon";
      mark.textContent = String(index + 1).padStart(2, "0");
      const copy = document.createElement("span");
      copy.className = "docs-category-copy";
      const name = document.createElement("strong");
      name.textContent = category;
      const description = document.createElement("span");
      description.textContent = categoryDescriptions[category] || "Explore commands for this part of your server.";
      copy.append(name, description);
      const count = document.createElement("span");
      count.className = "docs-category-count";
      count.textContent = String(commands.length);
      const arrow = document.createElement("span");
      arrow.className = "docs-category-arrow";
      arrow.innerHTML = '<svg aria-hidden="true"><use href="#i-arrow"></use></svg>';
      button.append(mark, copy, count, arrow);
      docsCategoryGrid.append(button);
    });
    function createDocCommandCard({ category, command, description }) {
      const card = document.createElement("article");
      card.className = "doc-command";
      const head = document.createElement("div");
      head.className = "doc-command-head";
      const title = document.createElement("h3");
      title.textContent = command;
      const categoryLabel = document.createElement("span");
      categoryLabel.className = "doc-category";
      categoryLabel.textContent = category;
      head.append(title, categoryLabel);
      const summary = document.createElement("p");
      summary.textContent = description;
      const usage = document.createElement("div");
      usage.className = "doc-usage";
      const usageLabel = document.createElement("span");
      usageLabel.className = "doc-usage-label";
      usageLabel.textContent = "Command";
      const code = document.createElement("code");
      code.textContent = command;
      const copyButton = document.createElement("button");
      copyButton.className = "copy-button";
      copyButton.type = "button";
      copyButton.title = "Copy command";
      copyButton.setAttribute("aria-label", `Copy ${command}`);
      copyButton.innerHTML = copyIcon;
      copyButton.addEventListener("click", () => copyCommand(code.textContent));
      usage.append(usageLabel, code, copyButton);
      card.append(head, summary, usage);
      return card;
    }
    const premiumCommandGuide = document.getElementById("premium-command-guide");
    premiumCommandGroups.forEach(([groupName, commands]) => {
      const group = document.createElement("section");
      group.className = "premium-command-group";
      const heading = document.createElement("h3");
      heading.textContent = groupName;
      const list = document.createElement("div");
      list.className = "premium-command-list";
      commands.forEach(([command, description]) => {
        const card = document.createElement("article");
        card.className = "premium-command";
        const code = document.createElement("code");
        code.textContent = command;
        const copyButton = document.createElement("button");
        copyButton.className = "copy-button";
        copyButton.type = "button";
        copyButton.title = "Copy command";
        copyButton.setAttribute("aria-label", `Copy ${command}`);
        copyButton.innerHTML = copyIcon;
        copyButton.addEventListener("click", () => copyCommand(command));
        const text = document.createElement("p");
        text.textContent = description;
        card.append(code, copyButton, text);
        list.append(card);
      });
      group.append(heading, list);
      premiumCommandGuide.append(group);
    });
    function filterDocs() {
      const query = docsSearch.value.trim().toLowerCase();
      docsCategoryGrid.querySelectorAll(".docs-category-button").forEach(button => {
        const category = button.dataset.category;
        const categoryCommands = documentedCommands.filter(item => item.category === category);
        const matchesSearch = !query || category.toLowerCase().includes(query) || categoryCommands.some(item => item.search.includes(query));
        button.hidden = !matchesSearch;
        button.classList.toggle("selected", category === selectedDocsCategory);
        button.setAttribute("aria-pressed", String(category === selectedDocsCategory));
      });
      const results = documentedCommands.filter(item =>
        (!selectedDocsCategory || item.category === selectedDocsCategory) &&
        (!query || item.search.includes(query))
      );
      docsResultsPanel.hidden = !selectedDocsCategory && !query;
      docsList.replaceChildren(...results.slice(0, visibleDocCount).map(createDocCommandCard));
      docsEmpty.hidden = results.length > 0;
      docsLoadMore.hidden = results.length <= visibleDocCount;
      docsLoadMore.textContent = `Show ${Math.min(8, results.length - visibleDocCount)} more commands`;
      docsResultsHeading.replaceChildren();
      if (docsResultsPanel.hidden) return;
      const headingCopy = document.createElement("div");
      const heading = document.createElement("h2");
      heading.textContent = selectedDocsCategory || "Search results";
      const summary = document.createElement("p");
      const searchSummary = query ? ` matching "${docsSearch.value.trim()}"` : "";
      summary.textContent = `${results.length} ${results.length === 1 ? "command" : "commands"}${searchSummary}`;
      headingCopy.append(heading, summary);
      const backButton = document.createElement("button");
      backButton.className = "docs-back-button";
      backButton.type = "button";
      backButton.textContent = "All categories";
      backButton.addEventListener("click", () => {
        selectedDocsCategory = "";
        visibleDocCount = 8;
        filterDocs();
      });
      docsResultsHeading.append(headingCopy, backButton);
    }
    docsCategoryGrid.addEventListener("click", event => {
      const button = event.target.closest(".docs-category-button");
      if (!button) return;
      selectedDocsCategory = button.dataset.category;
      visibleDocCount = 8;
      filterDocs();
    });
    docsSearch.addEventListener("input", () => {
      visibleDocCount = 8;
      filterDocs();
    });
    docsLoadMore.addEventListener("click", () => {
      visibleDocCount += 8;
      filterDocs();
    });
    filterDocs();

    function filterCommands() {
      const query = commandSearch.value.trim().toLowerCase();
      const category = selectedCommandCategory;
      let visibleCommands = 0;
      let visibleCategories = 0;
      commandGroups.querySelectorAll(".command-group").forEach(group => {
        const categoryMatches = !category || group.dataset.category === category;
        const searchInCategory = group.dataset.category.toLowerCase().includes(query);
        let visibleInGroup = 0;
        group.querySelectorAll(".command-item").forEach(item => {
          const command = decodeURIComponent(item.dataset.command);
          const match = categoryMatches && (!query || searchInCategory || command.toLowerCase().includes(query));
          item.hidden = !match;
          if (match) visibleInGroup++;
        });
        group.hidden = !categoryMatches || visibleInGroup === 0;
        const header = group.querySelector(".group-head");
        const list = group.querySelector(".command-list");
        const expanded = Boolean(query || category) || header.dataset.expanded === "true";
        setCommandGroupExpanded(header, expanded);
        header.setAttribute("aria-expanded", String(expanded));
        if (!group.hidden) {
          visibleCategories++;
          visibleCommands += visibleInGroup;
        }
      });
      resultCount.innerHTML = `<strong>${visibleCommands}</strong> listed ${visibleCommands === 1 ? "command" : "commands"} across <strong>${visibleCategories}</strong> ${visibleCategories === 1 ? "category" : "categories"} · 629 total in Madoka`;
      emptyState.hidden = visibleCommands !== 0;
    }
    function setCommandGroupExpanded(header, expanded) {
      const list = header.nextElementSibling;
      list.setAttribute("aria-hidden", String(!expanded));
      list.inert = !expanded;
      if (expanded) {
        list.classList.add("is-open");
        const inner = list.firstElementChild;
        const styles = getComputedStyle(list);
        const verticalPadding = parseFloat(styles.paddingTop) + parseFloat(styles.paddingBottom);
        list.style.maxHeight = `${inner.scrollHeight + verticalPadding}px`;
        return;
      }
      list.style.maxHeight = `${list.getBoundingClientRect().height}px`;
      requestAnimationFrame(() => {
        list.classList.remove("is-open");
        list.style.maxHeight = "0px";
      });
    }
    commandGroups.addEventListener("transitionend", event => {
      const list = event.target;
      if (event.propertyName === "max-height" && list.matches(".command-list") && list.classList.contains("is-open")) {
        list.style.maxHeight = "none";
      }
    });
    commandSearch.addEventListener("input", filterCommands);
    categoryFilter.addEventListener("click", event => {
      const option = event.target.closest(".category-picker-option");
      if (!option) return;
      selectedCommandCategory = option.dataset.category;
      categoryFilterLabel.textContent = selectedCommandCategory || "All categories";
      categoryFilter.querySelectorAll(".category-picker-option").forEach(item => {
        item.setAttribute("aria-selected", String(item === option));
      });
      categoryPicker.open = false;
      filterCommands();
    });
    commandGroups.addEventListener("click", event => {
      const header = event.target.closest(".group-head");
      if (!header) return;
      const expanded = header.getAttribute("aria-expanded") !== "true";
      header.dataset.expanded = String(expanded);
      if (commandSearch.value.trim() || selectedCommandCategory) {
        setCommandGroupExpanded(header, expanded);
        header.setAttribute("aria-expanded", String(expanded));
      } else {
        filterCommands();
      }
    });
    filterCommands();

    const toast = document.getElementById("toast");
    let toastTimer;
    async function copyCommand(command) {
      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(command);
        } else {
          const temporaryInput = document.createElement("textarea");
          temporaryInput.value = command;
          temporaryInput.style.position = "fixed";
          temporaryInput.style.opacity = "0";
          document.body.append(temporaryInput);
          temporaryInput.select();
          const copied = document.execCommand("copy");
          temporaryInput.remove();
          if (!copied) throw new Error("Clipboard access is unavailable.");
        }
        document.getElementById("toast-message").textContent = `Copied "${command}"`;
        toast.classList.add("show");
        clearTimeout(toastTimer);
        toastTimer = setTimeout(() => toast.classList.remove("show"), 2100);
      } catch (error) {
        document.getElementById("toast-message").textContent = "Couldn't copy. Please copy the command manually.";
        toast.classList.add("show");
        clearTimeout(toastTimer);
        toastTimer = setTimeout(() => toast.classList.remove("show"), 3200);
        console.error("Unable to copy command to clipboard:", error);
      }
    }
    commandGroups.addEventListener("click", event => {
      const button = event.target.closest(".copy-button");
      if (!button) return;
      const item = button.closest(".command-item");
      copyCommand(decodeURIComponent(item.dataset.command));
    });

    const reviewStorageKey = "madoka-review-v1";
    const reviewForm = document.getElementById("review-form");
    const reviewComment = document.getElementById("review-comment");
    const reviewStatus = document.getElementById("review-status");
    const savedReview = document.getElementById("saved-review");
    function displaySavedReview(review) {
      savedReview.replaceChildren();
      const heading = document.createElement("div");
      heading.className = "saved-review-heading";
      const label = document.createElement("span");
      label.textContent = "Your saved rating on this browser";
      const stars = document.createElement("span");
      stars.className = "saved-review-stars";
      stars.setAttribute("aria-label", `${review.rating} out of 5 stars`);
      stars.textContent = `${"★".repeat(review.rating)}${"☆".repeat(5 - review.rating)}`;
      heading.append(label, stars);
      savedReview.append(heading);
      if (review.comment) {
        const comment = document.createElement("p");
        comment.textContent = review.comment;
        savedReview.append(comment);
      }
      savedReview.hidden = false;
    }
    try {
      const storedReview = localStorage.getItem(reviewStorageKey);
      if (storedReview) {
        const review = JSON.parse(storedReview);
        if (!review || !Number.isInteger(review.rating) || review.rating < 1 || review.rating > 5 ||
          typeof review.comment !== "string" || review.comment.length > 500) {
          throw new Error("Saved review data has an invalid format.");
        }
        reviewForm.querySelector(`input[name="rating"][value="${review.rating}"]`).checked = true;
        reviewComment.value = review.comment;
        displaySavedReview(review);
      }
    } catch (error) {
      reviewStatus.textContent = "Couldn't load your saved rating from this browser.";
      console.error("Unable to load the saved Madoka review:", error);
    }
    reviewForm.addEventListener("submit", event => {
      event.preventDefault();
      const selectedRating = reviewForm.querySelector('input[name="rating"]:checked');
      if (!selectedRating) {
        reviewStatus.textContent = "Choose a star rating before saving.";
        return;
      }
      const review = {
        rating: Number(selectedRating.value),
        comment: reviewComment.value.trim()
      };
      try {
        localStorage.setItem(reviewStorageKey, JSON.stringify(review));
        displaySavedReview(review);
        reviewStatus.textContent = "Rating saved on this browser. It isn't published or shared with other visitors.";
      } catch (error) {
        reviewStatus.textContent = "Couldn't save your rating. Check your browser's storage settings and try again.";
        console.error("Unable to save the Madoka review:", error);
      }
    });

    const pageNames = { home: "Home", docs: "Docs", commands: "Commands", premium: "Premium", developers: "Madoka Developers" };
    function showPage(pageName) {
      if (!pageNames[pageName]) return;
      document.querySelectorAll(".page").forEach(page => page.classList.toggle("active", page.id === `page-${pageName}`));
      document.querySelectorAll(".nav-button").forEach(button => {
        const active = button.dataset.page === pageName;
        button.classList.toggle("active", active);
        if (active) button.setAttribute("aria-current", "page");
        else button.removeAttribute("aria-current");
      });
      document.getElementById("crumb-page").textContent = pageNames[pageName];
      if (history.replaceState) history.replaceState(null, "", `#${pageName}`);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    document.querySelectorAll(".nav-button").forEach(button => button.addEventListener("click", () => showPage(button.dataset.page)));
    document.querySelectorAll("[data-goto]").forEach(button => button.addEventListener("click", () => showPage(button.dataset.goto)));
    const themeToggle = document.getElementById("theme-toggle");
    const savedTheme = localStorage.getItem("madoka-theme");
    const initialTheme = savedTheme || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    function applyTheme(theme) {
      const darkMode = theme === "dark";
      document.documentElement.dataset.theme = darkMode ? "dark" : "light";
      themeToggle.setAttribute("aria-pressed", String(darkMode));
      themeToggle.setAttribute("aria-label", `Switch to ${darkMode ? "light" : "dark"} mode`);
      themeToggle.querySelector("use").setAttribute("href", darkMode ? "#i-sun" : "#i-moon");
      themeToggle.querySelector("span").textContent = darkMode ? "Light mode" : "Dark mode";
      document.querySelector('meta[name="theme-color"]').content = darkMode ? "#0c1510" : "#f7faf8";
    }
    applyTheme(initialTheme);
    themeToggle.addEventListener("click", () => {
      const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
      localStorage.setItem("madoka-theme", nextTheme);
      applyTheme(nextTheme);
    });
    const initialPage = location.hash.slice(1);
    if (pageNames[initialPage]) showPage(initialPage);
