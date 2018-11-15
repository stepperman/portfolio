# qtReminder

_noun_
weeaboo
 * Someone that likes anime, or something.

My friends on Discord frequently watch anime that is current airing. Waiting every week, and knowing at which time we can watch the anime specifically is 
a task too annoying that we don't want to do it. So I decided to do something _cool_ (weeb). Which is make a Discord bot, which lets people subscribe, and then periodically 
checks an Japanese media torrent site for new releases. This bot runs on my VPS server.

## What I did

### Lots of classes

This is a bot I have made before. However, it was quickly decomissioned as it was too buggy, and the code was spaghetti.  
I set out to make the code easier to read, and because of this have created many classes with functions only specific to them as best as I could. This makes 
it much easier to add new functionality to the program.

### Database

Subscribing uses a database, this uses a .NET library called LiteDB. This was very easy to use with the help of Linq, and will definitely use it again.

### Message Waiter

To subscribe, the subscriber module first queries an anime database for all anime specified with that name. The user can then, from that list, choose an anime to subscribe to. Once subscribed, the bot adds a heart reaction where users can subscribe as well.

This is done with the message waiter. The message waiter waits for messages in that specific channel, and then runs a task. This task will return false if it still needs to continue, or true if it has succeeded. Once succeeded, the bot will try to delete all messages relevant to that message waiter, if specified. 

You can also provide an additional class/array for further help if needed in the task that it calls.

```C#
private async Task<bool> WaiterFunction(SocketMessage message, object @params)
{
    string content = message.Content;
    int n;
    
    // try to parse the number in the message, if it's not a number, return false.
    if (!int.TryParse(content, out n)) return false;

    // cast the params to an AniListModel array. If it's not that, return.
    if (!(@params is AniListModel[] animeList)) return false;

    // if the n variable is is below 1, or higher than the list that the subscribe message has proivded, return false.
    if (n < 1 || n > animeList.Length + 1) return false;
    
    // n is reflected as one higher in the display, so lower it by 1 to adjust it to array specifications
    n--;            

    // create a new animeguildModel
    var anim = new AnimeGuildModel()
    {
        //// LEFT EMPTY SO LESS CODE IS SHOWN. (portfolio display only, view github for full code)
    };

    // try to subscribve the user to the anime. This returns false if the user is already subscribed.
    if (DatabaseSubscriber.SubscribeToAnime(ref anim, message.Author.Id))
    {
        Embed embed = CreateEmbed(anim, message);
        var succeedMessage = await ReplyAsync("", embed: embed);
        await succeedMessage.AddReactionAsync(new Emoji("❤"));
        
        // a new message waiter is added here (using a reaction)
        var guildUserWaiter = new GuildUserWaiter(Context.Guild.Id, Context.User.Id,
            async (messageId, reaction, anime) =>
            {
                // waiter logic...
            }, anim, false);

        guildUserWaiter.ParentMessage = succeedMessage;
        // Add the guildwaiter.
        ResponseModule.ResponseModule.AddWaiter(guildUserWaiter);
    }
    else
    {
        await ReplyAsync($"{message.Author.Mention} You already subscribed to {anim.AnimeTitle.EnglishTitle ?? anim.AnimeTitle.RomajiTitle}.");
    }
    
    // This function has succeeded, and is no longer needed. Return true to end it and remove it from the message waiter.
    return true;
}
```

