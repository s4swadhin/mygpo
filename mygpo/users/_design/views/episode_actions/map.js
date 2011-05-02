function(doc)
{
    if(doc.doc_type == "EpisodeUserState")
    {
        for(n in doc.actions)
        {
            action = doc.actions[n];

            action_obj = {
                    podcast_url:   doc.podcast_ref_url,
                    episode_url:   doc.ref_url,
                    podcast_id:    doc.podcast,
                    episode_id:    doc.episode,
                    action:        action.action,
                    timestamp:     action.timestamp.slice(0, action.timestamp.length-1),
                }

            if(action.device_oldid != null)
            {
                action_obj["device_oldid"] = action.device_oldid;
            }
            if(action.started != null)
            {
                action_obj["started"] = action.started;
            }
            if(action.playmark != null)
            {
                action_obj["position"] = action.playmark;
            }
            if(action.total != null)
            {
                action_obj["total"] = action.total;
            }


            emit([
                    doc.user_oldid,
                    action.timestamp,
                    doc.podcast,
                    doc.device_oldid
                ], action_obj
            );
        }
    }
}