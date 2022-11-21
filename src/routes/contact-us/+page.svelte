<script>
    import {Button, FormGroup, Input} from 'sveltestrap';
    let name, email, text

    const loadHtml = (url) => {
        return new Promise((resolve, reject) => {
            let request = new XMLHttpRequest();
            request.onload = function () {
                if (this.readyState === 4 && this.status === 200) {
                    resolve(this.responseText);
                } else {
                    reject(this.responseText);
                }
            };
            request.open("get", url, true);
            request.send();
        });
    };

    const createUrl = function(name, email, text) {
        return 'https://api.telegram.org/bot5511267408:AAE6ZGh1APZEMSLtCBgsy6Z1sXdAnj-5EIg/sendMessage?chat_id=@messagecollector&text=' + 'Name: ' + name + '%0AEmail: ' + email + '%0AMessage: ' + text
    }
</script>

<div class="row" style="height: min-content; margin: 0 0 23px;">
    <div class="col-8 offset-2 justify-content-center" style="display: flex;">
        <h1 style="height: min-content; margin-bottom: auto; margin-top: auto;">Let's get together</h1>
    </div>
</div>
<div class="container" style="height: calc(100vh - 204px)">
    <div class="row" style="height: min-content;">
        <div class="col-6" style="padding-right: 6px; height: min-content; padding-bottom: 12px;">
            <FormGroup style="margin-bottom: 0 !important;">
                <Input
                        type="name"
                        name="name"
                        id="exampleName"
                        bind:value={name}
                        placeholder="What's your name?"
                        style="font-family: Raleway, sans-serif;"
                />
            </FormGroup>
        </div>
        <div class="col-6" style="padding-left: 6px; height: min-content; padding-bottom: 12px;">
            <FormGroup class="needs-validation" style="margin-bottom: 0 !important;" >
                <Input
                        type="email"
                        name="email"
                        id="exampleEmail"
                        bind:value={email}
                        placeholder="Where can we email you back?"
                        style="font-family: Raleway, sans-serif;"
                />
            </FormGroup>
        </div>
    </div>
    <div class="row" style="height: calc(100% - 50px)">
        <FormGroup style="margin-bottom: 24px !important; height: calc(100% - 62px)">
            <Input
                    type="textarea"
                    name="text"
                    id="exampleText"
                    bind:value={text}
                    placeholder="What's on your mind?"
                    style="font-family: Raleway, sans-serif; resize: none; height: 100%"
            />
        </FormGroup>
        <Button
                type="submit"
                value="validate"
                on:click={ () => loadHtml(createUrl(name, email, text))}
                style="
            width: 5rem;
            height: 2.35rem;
            margin-left: auto;
            margin-right: calc(var(--bs-gutter-x) * 0.5);
            margin-bottom: calc(var(--bs-gutter-x) * 0.5);
            font-family: Raleway, sans-serif;
            font-weight: 600;"
        >Send
        </Button>
    </div>
</div>
<div id='myHiddenPage'></div>
<!--TODO email validation-->
<!--TODO more safe way to fetch API-->

<style>
    h1 {
        font-family: "Raleway", sans-serif;
        font-weight: 400;
        font-size: 32px;
    }

    .container {
        height: calc(100vh - 141px)
    }

    #myHiddenPage {
        display: none;
    }
</style>